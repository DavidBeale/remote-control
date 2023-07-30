import { render } from 'preact';
import asWebComponent from 'as-web-component';

async function* WakeLock() {
  this.wakeLockDisabled = false;

  const checkWakeLock = async () => {
    try {
      await navigator.wakeLock.request('screen');
      this.wakeLockDisabled = false;
    } catch (error) {
      console.error('WakeLock', error);
      this.wakeLockDisabled = true;
    }
  };

  setInterval(checkWakeLock, 30000);

  checkWakeLock();

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
        {wakeLockDisabled && <span>🚫</span>}
      </>
    );
  }
}

export default asWebComponent(WakeLock, render);
