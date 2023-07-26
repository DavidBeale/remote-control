import { render } from 'preact';
import asWebComponent from 'as-web-component';

import { select } from '../services/TrainService.js';
import Throttle from './Throttle';

async function* Controls(deviceName) {
  const connect = async () => {
    this.device = await select(this.props.deviceName);
  };

  for await (const { props, device } of this({ deviceName })) {
    if (device && props.deviceName !== device.name) {
      this.device = undefined;
    }

    yield (
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

          #connect {
            margin: auto;
          }
        `}
        </style>

        {device ? (
          <>
            <div>
              <fieldset>
                <label>
                  <input type="checkbox" role="switch" />
                  Engine
                </label>
                <label>
                  <input type="checkbox" role="switch" checked />
                  Headlight
                </label>
              </fieldset>
            </div>
            <Throttle></Throttle>
          </>
        ) : (
          <button id="connect" onClick={connect}>
            Connect
          </button>
        )}
      </section>
    );
  }
}

export default asWebComponent(Controls, render);
