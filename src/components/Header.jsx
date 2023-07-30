import { render } from 'preact';
import asWebComponent from 'as-web-component';

import WakeLock from './WakeLock.jsx';

import pdk from '../../package.json';

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
          margin-bottom: 0;
        }
      `}
      </style>

      <header>
        <h1>BLE Remote Control ({pdk.version})</h1>
        <WakeLock></WakeLock>
      </header>
    </>
  );
}

export default asWebComponent(Header, render);
