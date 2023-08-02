import { render } from 'preact';
import asWebComponent, { dispatchEvent } from 'as-web-component';

import './Gear.css';

async function Direction(gear, gears = {}, disabled = false, step = 1) {
  const gearEntries = Object.entries(gears);
  const min = Math.min(...gearEntries.map(([, value]) => value));
  const max = Math.max(...gearEntries.map(([, value]) => value));

  return (
    <>
      <link rel="stylesheet" href="/dist/main.css"></link>

      <input
        type="range"
        value={gear}
        disabled={disabled}
        onChange={(event) =>
          dispatchEvent(
            this,
            new CustomEvent('change', { detail: event.target.valueAsNumber })
          )
        }
        min={min}
        max={max}
        step={step}
        list="markers"
      />
      <datalist id="markers">
        {gearEntries.map(([label, value]) => (
          <option value={value}>{label}</option>
        ))}
      </datalist>
    </>
  );
}

export default asWebComponent(Direction, render);
