import { render } from 'preact';
import asWebComponent from 'as-web-component';

import WakeLock from './WakeLock.jsx';

import pdk from '../../package.json';

import './Header.css';

function Header() {
  return (
    <>
      <link rel="stylesheet" href="/dist/main.css"></link>

      <header>
        <h1>BLE Remote Control ({pdk.version})</h1>
        <WakeLock></WakeLock>
      </header>
    </>
  );
}

export default asWebComponent(Header, render);
