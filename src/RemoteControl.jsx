import { render } from 'preact';
import asWebComponent from 'as-web-component';
import { computed, effect } from '@preact/signals';

import Header from './components/Header.jsx';
import DeviceSelector from './components/DeviceSelector.jsx';
import Controls from './controls/Controls.jsx';
import Connect from './controls/Connect.jsx';
import TrainService from './services/TrainService.js';

async function* RemoteControl() {
  const knownDevices = ['Star', 'Jessie'];

  const deviceToServiceMap = Object.fromEntries(
    knownDevices.map((name) => [name, new TrainService(name)])
  );

  this.status = computed(() =>
    Object.entries(deviceToServiceMap).map(
      ([, service]) => service.isConnected.value
    )
  );

  [this.currentDeviceName = ''] = knownDevices;
  this.selectOpen = TrainService.selectOpen;

  const changeDevice = (name) => {
    this.currentDeviceName = name;
  };

  const menuSelected = (option) => {
    // eslint-disable-next-line default-case
    switch (option) {
      case 'Disconnect': {
        const service = deviceToServiceMap[this.currentDeviceName];
        service.disconnect();
        break;
      }
    }
  };

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
            ${selectOpen.value ? 'opacity: 10%; pointer-events: none;' : ''}
           }

           main.container-fluid {
            height: 100%;
            display: flex;
            flex-direction: column;
            padding-inline: .5rem;
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
            onMenu={(event) => menuSelected(event.detail)}
          ></DeviceSelector>
          {service.isConnected.value ? (
            <Controls service={service}></Controls>
          ) : (
            <Connect service={service}></Connect>
          )}
        </main>
      </>
    );
  }
}

export default asWebComponent(RemoteControl, render, { effect });
