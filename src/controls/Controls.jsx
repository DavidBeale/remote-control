import { render } from 'preact';
import asWebComponent from 'as-web-component';

import Throttle from './Throttle';

async function* Controls(features = []) {
  for await (const { props } of this({ features })) {
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
        `}
        </style>
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
      </section>
    );
  }
}

export default asWebComponent(Controls, render);
