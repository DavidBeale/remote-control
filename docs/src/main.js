import './components/RemoteControl.js';
import './components/FeatureSwitch.js';
import * as trainService from './services/TrainService.js';

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
      const velocity = document.createElement('input');
      velocity.type = 'range';
      velocity.id = 'velocity';
      velocity.min = -100;
      velocity.max = 100;
      velocity.value = 0;
      velocity.step = 10;
      velocity.style.zoom = 3;
      velocity.style.width = '100%';
      velocity.style.paddingBlock = '1rem';
      velocity.addEventListener('change', async event => {
        await feature.writeValue(Int8Array.from([Number(event.target.value)]));
      });
      document.body.appendChild(velocity);
      
      const stop = document.createElement('button');
      stop.innerText = 'STOP';
      stop.style.background = 'red';
      stop.style.zoom = 2;
      stop.addEventListener('click', () => {
        velocity.value = 0;
        feature.writeValue(Int8Array.from([0]));
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