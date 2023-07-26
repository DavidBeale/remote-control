import Multirator from 'multirator';

const TRAIN_SERVICE_UUID = 'e4580f53-0298-41fa-8210-ce8f8bbe23a3';

let primaryService;
const featureMap = {};

export async function select() {
  const device = await navigator.bluetooth.requestDevice({
    filters: [
      { services: [TRAIN_SERVICE_UUID] },
      { services: ['6e400001-b5a3-f393-e0a9-e50e24dcca9e'] }
    ]
  });

  return device;
}

export async function connect(device) {
  console.log(`Connecting to device ${device.name}`);
  try {
    await device.gatt.connect();
    console.log('Connected to device', device.name);

    primaryService = await device.gatt.getPrimaryService(TRAIN_SERVICE_UUID);
  } catch (error) {
    console.error('Failed to connect to Device');
    console.error(error.stack ?? error);
    console.log('Retrying in 3secs');
    setTimeout(async () => {
      // Can't just call device.gatt.connect() again in WebBLE browser on iOS :-(
      const device = await navigator.bluetooth.requestDevice({
        filters: [{ name: device.name }]
      });
      connect(device);
    }, 3000);
  }

  device.addEventListener('gattserverdisconnected', reConnect);

  await loadFeatures();
}

export async function disconnect(device) {
  device.removeEventListener('gattserverdisconnected', reConnect);

  await device.disconnect();
  device = null;
  primaryService = null;
}

export function getFeatures() {
  return Object.values(featureMap);
}

function reConnect(device) {
  console.log('Disconnected from device', device.name);
  primaryService = null;
  connect();
}

async function loadFeatures() {
  const features = await primaryService.getCharacteristics();

  for (const feature of features) {
    if (!featureMap[feature.uuid]) {
      featureMap[feature.uuid] = {
        uuid: feature.uuid
      };
      featureMap[feature.uuid].value = new Multirator(
        (async function* emit() {
          if (feature.value) yield feature.value;
          while (true) {
            yield new Promise((resolve) => {
              featureMap[feature.uuid].resolver = resolve;
            });
          }
        })()
      );
    }

    featureMap[feature.uuid].writeValue = feature.writeValue.bind(feature);
    featureMap[feature.uuid].readValue = feature.readValue.bind(feature);
    feature.addEventListener('characteristicvaluechanged', async () => {
      featureMap[feature.uuid]?.resolver(feature.value);
    });
    feature.startNotifications();

    feature.readValue().then(() => {
      featureMap[feature.uuid]?.resolver(feature.value);
    });
  }
}
