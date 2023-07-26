import { render } from 'preact';
import asWebComponent, { dispatchEvent } from 'as-web-component';

async function* DeviceSelector(devices, currentDeviceName) {
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

  for await (const { props } of this({ devices, currentDeviceName })) {
    yield (
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
            margin-top: var(--pico-spacing);
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
        }
        `}
        </style>

        <nav>
          <div role="group">
            {props.devices.map((name) => {
              if (name === props.currentDeviceName) {
                return <button aria-current="true">{name}</button>;
              }
              return (
                <button class="secondary" onClick={() => select(name)}>
                  {name}
                </button>
              );
            })}
          </div>
        </nav>
      </>
    );
  }
}

export default asWebComponent(DeviceSelector, render);
