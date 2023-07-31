import { render } from 'preact';
import asWebComponent from 'as-web-component';

import TrainService from '../services/TrainService.js';
import { disableScreenLock } from '../services/WakeLockService.js';

async function Connect(service) {
  const connect = async () => {
    disableScreenLock();
    const device = await TrainService.select();
    service.connect(device);
  };

  return (
    <section>
      <link rel="stylesheet" href="/dist/main.css"></link>
      <style>
        {`
          section {
            display: flex;
            height: 100%;
          }

          button {
            margin: auto;
          }
        `}
      </style>

      <button onClick={connect}>Connect</button>
    </section>
  );
}

export default asWebComponent(Connect, render);
