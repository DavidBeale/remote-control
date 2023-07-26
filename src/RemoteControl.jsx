import { render } from 'preact';
import asWebComponent from 'as-web-component';

import Header from './components/Header.jsx';
import DeviceSelector from './components/DeviceSelector.jsx';
import Controls from './controls/Controls.jsx';
import { select } from './services/TrainService.js';

async function* RemoteControl() {
  const knownDevices = {
    Star: 'uuid-234234-234-234',
    Jessie: 'uuid-s-sdf-sdf-sdf'
  };

  this.currentDeviceId = Object.entries(knownDevices)[0][1];

  const changeDevice = (uuid) => {
    this.currentDeviceId = uuid;
    select(uuid);
  };

  for await (const { currentDeviceId } of this) {
    yield (
      <>
        <link rel="stylesheet" href="/dist/main.css"></link>
        <Header></Header>
        <main class="container-fluid">
          <DeviceSelector
            devices={knownDevices}
            currentDeviceId={currentDeviceId}
            onChange={(event) => changeDevice(event.detail.uuid)}
          ></DeviceSelector>
          <Controls></Controls>
        </main>
      </>
    );
  }
}

export default asWebComponent(RemoteControl, render);
