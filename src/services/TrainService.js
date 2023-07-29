import Multirator from 'multirator';
import enqueue from '../utils/enqueue';

const TRAIN_SERVICE_UUID = 'e4580f53-0298-41fa-8210-ce8f8bbe23a3';

export default class TrainService {
  constructor(deviceName, statusHandler = () => {}) {
    this.deviceName = deviceName;
    this.statusHandler = statusHandler;

    this.device = undefined;
    this.primaryService = undefined;
    this.featureMap = {};
  }

  static async select(name) {
    const device = await navigator.bluetooth.requestDevice({
      filters: name
        ? [{ name }]
        : [
            { services: [TRAIN_SERVICE_UUID] },
            { services: ['6e400001-b5a3-f393-e0a9-e50e24dcca9e'] }
          ]
    });

    return device;
  }

  get isConnected() {
    return this.device?.gatt?.connected ?? false;
  }

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
      this.statusHandler({
        isConnected: this.isConnected
      });
    } catch (error) {
      console.error('Failed to connect to Device');
      console.error(error.stack ?? error);
      console.log('Retrying in 3secs');
      setTimeout(async () => {
        // Can't just call device.gatt.connect() again in WebBLE browser on iOS :-(
        const newDevice = await navigator.bluetooth.requestDevice({
          filters: [{ name: this.device.name }]
        });
        this.connect(newDevice);
      }, 3000);
    }
  }

  async disconnect() {
    this.device.removeEventListener('gattserverdisconnected', reConnect);

    await this.device.disconnect();
  }
}

function reConnect() {
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
