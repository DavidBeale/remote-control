import './components/RemoteControl.js';
import './components/FeatureSwitch.js';
import * as trainService from './services/TrainService.js';

export async function connect() {
  await trainService.select();
  await trainService.connect();

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
      velocity.style.zoom = 2;
      velocity.addEventListener('change', async event => {
        await feature.writeValue(Int8Array.from([Number(event.target.value)]));
      });
      document.body.appendChild(velocity);
    } else {
      // // const labelDesc = await feature.getDescriptor('00002901-0000-1000-8000-00805f9b34fb');
      // const labelValue = 'UNKNOWN' // utf8decoder.decode(await labelDesc.readValue());
      // const label = document.createElement('label');
      // label.for = feature.uuid;
      // label.textContent = labelValue;
      // document.body.appendChild(label);

      const featureSwitch = document.createElement('feature-switch');
      featureSwitch.feature = feature;
      document.body.appendChild(featureSwitch);
    }
  }
}
