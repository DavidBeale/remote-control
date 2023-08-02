import { render } from 'preact';
import asWebComponent from 'as-web-component';
import { screenLockDisabled } from '../services/WakeLockService';
import { effect } from '@preact/signals';

import './WakeLock.css';

async function* WakeLock() {
  this.wakeLockDisabled = screenLockDisabled;

  for await (const { wakeLockDisabled } of this) {
    yield (
      <>
        <link rel="stylesheet" href="/dist/main.css"></link>

        <span>🔅</span>
        {!wakeLockDisabled.value && <span>🚫</span>}
      </>
    );
  }
}

export default asWebComponent(WakeLock, render, {
  effect
});
