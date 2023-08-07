import { render } from 'preact';
import asWebComponent, { getDom, dispatchEvent } from 'as-web-component';
import RangeSlider from './RangeSlider.js';

import './Throttle.css';

async function* Throttle(speed = 0) {
  yield (
    <>
      <link rel="stylesheet" href="/dist/main.css"></link>

      <input
        type="range"
        value={speed}
        onChange={(event) =>
          dispatchEvent(
            this,
            new CustomEvent('change', { detail: event.target.valueAsNumber })
          )
        }
        min="0"
        max="100"
        step="5"
      />
      <button
        id="stop"
        onClick={() =>
          dispatchEvent(this, new CustomEvent('change', { detail: 0 }))
        }
      >
        Stop
      </button>
    </>
  );

  const range = getDom(this).querySelector('input');

  new RangeSlider(range, { range: 'circular' });

  for await (const { props } of this({ speed })) {
    range.value = props.speed;
    range.dispatchEvent(new Event('input'));
  }
}

export default asWebComponent(Throttle, render);
