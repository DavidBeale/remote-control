import { render } from 'preact';
import asWebComponent, { dispatchEvent } from 'as-web-component';

async function Direction(direction, disabled) {
  return (
    <>
      <link rel="stylesheet" href="/dist/main.css"></link>
      <style>
        {`
        :host {
          display: block;
        }

        datalist {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }
        
        option {
          padding: 0;
        }
        
        input[type="range"] {
          margin: 0;
        }
        
      `}
      </style>
      <input
        type="range"
        value={direction}
        disabled={disabled}
        onChange={(event) =>
          dispatchEvent(
            this,
            new CustomEvent('change', { detail: event.target.valueAsNumber })
          )
        }
        min="-1"
        max="1"
        step="2"
        list="markers"
      />
      <datalist id="markers">
        <option value="-1">Reverse</option>
        <option value="1">Forward</option>
      </datalist>
    </>
  );
}

export default asWebComponent(Direction, render);
