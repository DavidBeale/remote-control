import { render } from 'preact';
import asWebComponent from 'as-web-component';

import WakeLock from './WakeLock';

function Header() {
  return (
    <>
      <link rel="stylesheet" href="/dist/main.css"></link>
      <style>
        {`
        :host {
           background: var(--pico-primary-background);
           display: block;
        }

        header {
          display: flex;
        }

        h1 {
          --pico-font-size: 1rem;
          flex: 2;
          text-align: center;
        }
      `}
      </style>

      <header>
        <h1>Remote Control</h1>
        <WakeLock></WakeLock>
      </header>
    </>
  );
}

export default asWebComponent(Header, render);
