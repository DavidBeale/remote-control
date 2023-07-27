import { render } from 'preact';
import asWebComponent from 'as-web-component';

import Header from './components/Header.jsx';
import DeviceSelector from './components/DeviceSelector.jsx';
import Controls from './controls/Controls.jsx';
import Connect from './controls/Connect.jsx';
import TrainService from './services/TrainService.js';

async function* RemoteControl() {
  const knownDevices = ['Star', 'Jessie'];

  const deviceToServiceMap = Object.fromEntries(
    knownDevices.map((name) => [
      name,
      new TrainService(name, (status) => {
        this.status = status;
      })
    ])
  );

  [this.currentDeviceName = ''] = knownDevices;

  const changeDevice = (name) => {
    this.currentDeviceName = name;
  };

  for await (const { currentDeviceName } of this) {
    const service = deviceToServiceMap[currentDeviceName];

    yield (
      <>
        <link rel="stylesheet" href="/dist/main.css"></link>
        <Header></Header>
        <main class="container-fluid">
          <DeviceSelector
            devices={knownDevices}
            currentDeviceName={currentDeviceName}
            onChange={(event) => changeDevice(event.detail.name)}
          ></DeviceSelector>
          {service.isConnected ? (
            <Controls service={service}></Controls>
          ) : (
            <Connect service={service}></Connect>
          )}
        </main>
      </>
    );
  }
}

export default asWebComponent(RemoteControl, render);
