import { render } from 'preact';
import asWebComponent from 'as-web-component';

function WakeLock() {
  return (
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

      <>
        <span>🔅</span>
        <span>🚫</span>
      </>
    </>
  );
}

export default asWebComponent(WakeLock, render);
