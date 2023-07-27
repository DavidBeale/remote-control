import { render } from 'preact';
import asWebComponent from 'as-web-component';

import TrainService from '../services/TrainService.js';

async function Connect(service) {
  const connect = async () => {
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
            flex-direction: column;
            height: calc(100vh - 5rem);
            margin-top: 1rem;
          }

          section div {
            flex: 2
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
