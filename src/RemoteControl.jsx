import { render } from 'preact';
import asWebComponent from 'as-web-component';
import { effect } from '@preact/signals';

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
  this.selectOpen = false;

  const changeDevice = (name) => {
    this.currentDeviceName = name;
  };

  effect(() => {
    this.selectOpen = TrainService.selectOpen.value;
  });

  for await (const { currentDeviceName, selectOpen } of this) {
    const service = deviceToServiceMap[currentDeviceName];
    yield (
      <>
        <link rel="stylesheet" href="/dist/main.css"></link>

        <style>
          {`
           :host {
            display: flex;
            flex-direction: column;
            height: 100%;
            ${selectOpen ? 'opacity: 10%; pointer-events: none;' : ''}
           }

           main {
            height: 100%;
            display: flex;
            flex-direction: column;
           }

           main :nth-child(2) {
            flex: 1;
           }
          `}
        </style>

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
