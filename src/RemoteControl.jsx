import { render } from 'preact';
import asWebComponent from 'as-web-component';

import Header from './components/Header.jsx';
import DeviceSelector from './components/DeviceSelector.jsx';
import Controls from './controls/Controls.jsx';

async function* RemoteControl() {
  const knownDevices = ['Star', 'Jessie'];

  this.currentDeviceName = knownDevices[0];

  const changeDevice = (name) => {
    this.currentDeviceName = name;
  };

  for await (const { currentDeviceName } of this) {
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
          <Controls deviceName={currentDeviceName}></Controls>
        </main>
      </>
    );
  }
}

export default asWebComponent(RemoteControl, render);
