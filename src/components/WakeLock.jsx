import { render } from 'preact';
import asWebComponent from 'as-web-component';
import { screenLockDisabled } from '../services/WakeLockService';
import { effect } from '@preact/signals';

async function* WakeLock() {
  this.wakeLockDisabled = false;

  effect(() => {
    this.wakeLockDisabled = screenLockDisabled.value;
  });

  for await (const { wakeLockDisabled } of this) {
    yield (
      <>
        <link rel="stylesheet" href="/dist/main.css"></link>
        <style>
          {`
          :host {
             display: grid;
          }
  
          span {
            grid-column: 1;
            grid-row: 1;
          }
        `}
        </style>

        <span>🔅</span>
        {!wakeLockDisabled && <span>🚫</span>}
      </>
    );
  }
}

export default asWebComponent(WakeLock, render);
