import { render } from 'preact';
import asWebComponent from 'as-web-component';

function Tabs() {
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
          border-bottom: 1px solid var(--pico-primary);
          width: 100%;
          margin-top: var(--pico-spacing)
        }

        div[role=group] {
          margin-bottom: 0;
        }

        [role=group] button {
          --pico-form-element-spacing-vertical: .3rem;
          --pico-form-element-spacing-horizontal: 1rem;
        }
      }
      `}
      </style>

      <nav>
        <div role="group">
          <button aria-current="true">Star</button>
          <button class="secondary">Jessie</button>
        </div>
      </nav>
    </>
  );
}

export default asWebComponent(Tabs, render);
