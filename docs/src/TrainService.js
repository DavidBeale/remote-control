
const TRAIN_SERVICE_UUID = 'e4580f53-0298-41fa-8210-ce8f8bbe23a3';

let device;
let primaryService;
const featureMap = {};

export async function select() {
  device = await navigator.bluetooth.requestDevice({
    filters: [
      { services: [TRAIN_SERVICE_UUID] },
      { services: ['6e400001-b5a3-f393-e0a9-e50e24dcca9e'] }
    ]
  });
}

export async function connect() {
  console.log('Connecting to device ' + device.name);
  await device.gatt.connect();
  console.log('Connected to device', device.name);

  primaryService = await device.gatt.getPrimaryService(TRAIN_SERVICE_UUID);

  device.addEventListener('gattserverdisconnected', reConnect);

  await loadFeatures();
}

export async function disconnect() {
  device.removeEventListener('gattserverdisconnected', reConnect);

  await device.disconnect();
  device = null;
  primaryService = null;
}

export async function getFeatures() {
  return Object.values(featureMap);
}

function reConnect() {
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
    }

    featureMap[feature.uuid].writeValue = feature.writeValue.bind(feature),
    featureMap[feature.uuid].readValue = feature.readValue.bind(feature)
  }
}
