import Multirator from 'multirator';
import { signal } from '@preact/signals';
import enqueue from '../utils/enqueue';

const TRAIN_SERVICE_UUID = 'e4580f53-0298-41fa-8210-ce8f8bbe23a3';

export default class TrainService {
  constructor(deviceName) {
    this.deviceName = deviceName;
    this.device = undefined;
    this.primaryService = undefined;
    this.featureMap = {};

    this.isConnected = signal(false);
  }

  static async select(name) {
    TrainService.selectOpen.value = true;
    try {
      const device = await navigator.bluetooth.requestDevice({
        filters: name
          ? [{ name }]
          : [
              { services: [TRAIN_SERVICE_UUID] },
              { services: ['6e400001-b5a3-f393-e0a9-e50e24dcca9e'] }
            ]
      });

      return device;
    } finally {
      TrainService.selectOpen.value = false;
    }
  }

  static selectOpen = signal(false);

  get features() {
    return Object.values(this.featureMap);
  }

  async connect(device) {
    this.device = device;
    console.log('Connecting to device', this.device?.name);
    try {
      await this.device.gatt.connect();
      console.log('Connected to device', this.device?.name);

      this.primaryService = await this.device.gatt.getPrimaryService(
        TRAIN_SERVICE_UUID
      );

      this.device.addEventListener(
        'gattserverdisconnected',
        reConnect.bind(this)
      );

      await loadFeatures.call(this);
      this.isConnected.value = true;
    } catch (error) {
      console.error('Failed to connect to Device');
      console.error(error.stack ?? error);
      console.log('Retrying in 3secs');

      this.isConnected.value = false;
      setTimeout(async () => {
        // Can't just call device.gatt.connect() again in WebBLE browser on iOS :-(
        const newDevice = await TrainService.select(this.device.name);
        this.connect(newDevice);
      }, 3000);
    }
  }

  disconnect() {
    if (!this.device) return;

    this.device.removeEventListener('gattserverdisconnected', reConnect);
    this.isConnected.value = false;
    this.device.gatt.disconnect();
  }
}

function reConnect() {
  if (!this.isConnected.value) return;

  console.log('Disconnected from device', this.device?.name ?? 'Unknown');
  this.connect(this.device);
}

async function loadFeatures() {
  const features = await this.primaryService.getCharacteristics();

  for (const feature of features) {
    if (!this.featureMap[feature.uuid]) {
      this.featureMap[feature.uuid] = {
        uuid: feature.uuid
      };
      this.featureMap[feature.uuid].value = new Multirator(
        async function* emit() {
          if (feature.value) yield feature.value;
          while (true) {
            yield new Promise((resolve) => {
              this.featureMap[feature.uuid].resolver = resolve;
            });
          }
        }.call(this)
      );
    }

    this.featureMap[feature.uuid].writeValue = (value) =>
      enqueue(() => feature.writeValue.call(feature, value));
    this.featureMap[feature.uuid].readValue = () =>
      enqueue(() => feature.readValue.call(feature));
    feature.addEventListener('characteristicvaluechanged', async () => {
      this.featureMap[feature.uuid]?.resolver(feature.value);
    });
    feature.startNotifications();

    this.featureMap[feature.uuid].readValue().then(() => {
      this.featureMap[feature.uuid]?.resolver(feature.value);
    });
  }
}
