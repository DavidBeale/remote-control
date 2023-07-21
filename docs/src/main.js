import './components/RemoteControl.js';
import './components/FeatureSwitch.js';
import * as trainService from './services/TrainService.js';
import RangeSlider from './components/RangeSlider.js';
import enqueue from './utils/enqueue.js';

wakeLock();

export async function connect() {
  await wakeLock();
  await trainService.select();
  await trainService.connect();

  const connectButton = document.querySelector('#connect');
  connectButton.disabled = true;

  const features = await trainService.getFeatures();

  for await (const feature of features) {
    if (feature.uuid === '0000000d-0000-1000-8000-00805f9b34fb') {
      let direction = 1;

      const reverse = document.createElement('input');
      const velocity = document.createElement('input');
      velocity.type = 'range';
      velocity.id = 'velocity';
      velocity.min = 0;
      velocity.max = 100;
      velocity.value = 0;
      velocity.step = 5;
      velocity.style.zoom = 3;
      velocity.style.width = '100%';
      velocity.style.paddingBlock = '1rem';
      velocity.addEventListener('change', async event => {
        enqueue(() => feature.writeValue(Int8Array.from([event.target.valueAsNumber * direction])));
        reverse.disabled = event.target.valueAsNumber !== 0
      });
      document.body.appendChild(velocity);
      new RangeSlider(velocity, { range: 'circular' });
      
      reverse.type = 'checkbox';
      reverse.addEventListener('change', (event) => event.target.checked ? direction = -1 : direction = 1);
      document.body.appendChild(reverse);
      
      const stop = document.createElement('button');
      stop.innerText = 'STOP';
      stop.style.background = 'red';
      stop.style.zoom = 2;
      stop.addEventListener('click', () => {
        velocity.value = 0;
        velocity.dispatchEvent(new Event('input', { 'bubbles': true }));
      })
      document.body.appendChild(stop);
    } else {
      const featureSwitch = document.createElement('feature-switch');
      featureSwitch.feature = feature;
      document.body.appendChild(featureSwitch);
    }
  }
}


async function wakeLock() {
  try {
    const wakeLock = await navigator.wakeLock.request("screen");
  } catch (error) {
    console.error(error);
  }
}