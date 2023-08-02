import { render } from 'preact';
import asWebComponent, { dispatchEvent } from 'as-web-component';

import './DeviceSelector.css';

async function DeviceSelector(devices, currentDeviceName) {
  const select = (name) => {
    dispatchEvent(
      this,
      new CustomEvent('change', {
        detail: {
          name
        }
      })
    );
  };

  const menuSelect = (event) => {
    dispatchEvent(
      this,
      new CustomEvent('Menu', {
        detail: event.target.value
      })
    );
    // eslint-disable-next-line no-param-reassign
    event.target.value = '';
  };

  return (
    <>
      <link rel="stylesheet" href="/dist/main.css"></link>

      <nav>
        <div role="group">
          {devices.map((name) => {
            if (name === currentDeviceName) {
              return <button aria-current="true">{name}</button>;
            }
            return (
              <button class="secondary" onClick={() => select(name)}>
                {name}
              </button>
            );
          })}
        </div>
        <select onChange={menuSelect} value="">
          <option value="" disabled>
            ...
          </option>
          <option>Add Device</option>
          <option>Disconnect</option>
        </select>
      </nav>
    </>
  );
}

export default asWebComponent(DeviceSelector, render);
