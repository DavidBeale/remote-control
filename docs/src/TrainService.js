
const TRAIN_SERVICE_UUID = 'e4580f53-0298-41fa-8210-ce8f8bbe23a3';

let device;
let primaryService;

export async function connect() {
  device = await navigator.bluetooth.requestDevice({
    filters: [
      { services: [TRAIN_SERVICE_UUID] },
      { services: ['6e400001-b5a3-f393-e0a9-e50e24dcca9e'] }
    ]
  });
  await device.gatt.connect();

  primaryService = await device.gatt.getPrimaryService(TRAIN_SERVICE_UUID);
}

export async function disconnect() {
  await device.disconnect();
  device = null;
  primaryService = mull;
}

export async function getFeatures() {
  const features = await primaryService.getCharacteristics();
}
