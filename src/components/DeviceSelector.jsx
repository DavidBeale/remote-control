import { render } from 'preact';
import asWebComponent, { dispatchEvent } from 'as-web-component';

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
      <style>
        {`
          @namespace css url(http://www.w3.org/2000/css);
  
          :host {
             display: block;
          }
  
          nav {
            border-bottom: 2px solid var(--pico-primary-hover-background);;
            width: 100%;
            margin-top: .5rem;
            padding-inline: 0.5rem;
          }
  
          div[role=group] {
            margin-bottom: 0px;
          }
  
          [role=group] button {
            --pico-form-element-spacing-vertical: .3rem;
            --pico-form-element-spacing-horizontal: 1rem;
            border-radius: 0;
          }

          :host select {
            width: 2rem;
            padding: .3rem;
            background-image: none;
            text-align: center;
            margin: 0;
          }
        }
        `}
      </style>

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
