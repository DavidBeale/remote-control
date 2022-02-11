import * as tranService from './TrainService.js';

export async function connect() {
  await tranService.connect();

  const features = await trainService.getFeatures();

  for await (const feature of features) {
    if (feature.uuid === '0000000d-0000-1000-8000-00805f9b34fb') {
      const velocity = document.createElement('input');
      velocity.type = 'range';
      velocity.id = 'velocity';
      velocity.min = -100;
      velocity.max = 100;
      velocity.value = 0;
      velocity.step = 10;
      velocity.addEventListener('change', async event => {
        await feature.writeValue(Int8Array.from([Number(event.target.value)]));
      });
      document.body.appendChild(velocity);
    } else {
      const box = document.createElement('input');
      box.type = 'checkbox';
      box.id = feature.uuid;
      box.addEventListener('click', async event => {
        console.log(event);
        if (event.target.checked) {
          await feature.writeValue(Uint8Array.from([1]));
        } else {
          await feature.writeValue(Uint8Array.from([0]));
        }
        console.log((await feature.readValue()).getUint8());
      });
      document.body.appendChild(box);

      // const labelDesc = await feature.getDescriptor('00002901-0000-1000-8000-00805f9b34fb');
      const labelValue = 'UNKNOWN' // utf8decoder.decode(await labelDesc.readValue());
      const label = document.createElement('label');
      label.for = feature.uuid;
      label.textContent = labelValue;
      document.body.appendChild(label);
    }
  }
}
