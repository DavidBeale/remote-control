import { render } from 'preact';
import asWebComponent, { getDom, dispatchEvent } from 'as-web-component';

async function* Throttle(speed = 0) {
  yield (
    <>
      <link rel="stylesheet" href="/dist/main.css"></link>
      <style>
        {`
        :host {
          display: block;
          position: relative;
          text-align: center;
        }

        #stop {
          --pico-background-color: red;
          --pico-border-color: darkred;

          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 20px;
          margin: auto;
          width: 5rem;
          height: 5rem;
          border-radius: 100%;
          z-index: 100;
        }

        .c-rng {
          --rng-focus: #064374;
          --rng-lower: #6495ED;
          --rng-upper: #CFD8DC;
          --rng-percent: 0%;
          --rng-percent-upper: 80%;
          
          --rng-bdrs: .375rem;
          --rng-bgi: linear-gradient(to right, var(--rng-lower) var(--rng-percent), var(--rng-upper) var(--rng-percent));
          --rng-h: 0.75rem;
          --rng-m: 2rem 0;
          --rng-w: 100%;
          
          --rng-label-c: #333;
          --rng-label-fz: 0.75rem;
          --rng-label-off: 0.25rem;
                
          --rng-thumb-bdrs: 50%;
          --rng-thumb-bxsh: none;
          --rng-thumb-bxsh--focus: inset 0 0 0 0.25rem var(--rng-focus);
          --rng-thumb-bgc: #0960A5;
          --rng-thumb-h: 2rem;
          --rng-thumb-w: 2rem;
          --rng-thumb-z: 1;
  
          background-image: var(--rng-bgi);
          border-radius: var(--rng-bdrs);
          box-sizing: border-box;
          font-family: inherit;
          height: var(--rng-h);
          margin: var(--rng-m);
          outline: none;
          position: relative;
          width: var(--rng-w);
        }
        /* 
        =====
        THUMB
        =====
        */
        .c-rng::-moz-range-thumb {
          background-color: var(--rng-thumb-bgc);
          border-radius: var(--rng-thumb-bdrs);
          box-shadow: var(--rng-thumb-bxsh);
          color: #000;
          cursor: ew-resize;
          height: var(--rng-thumb-h);  
          margin-top: calc(0px - ((var(--rng-thumb-h) - var(--rng-h)) / 2));
          position: relative;
          width: var(--rng-thumb-w);
          z-index: var(--rng-thumb-z);
        }
        .c-rng::-webkit-slider-thumb {
          background-color: var(--rng-thumb-bgc);
          border-radius: var(--rng-thumb-bdrs);
          box-shadow: var(--rng-thumb-bxsh);
          cursor: ew-resize;
          height: var(--rng-thumb-h);  
          margin-top: calc(0px - ((var(--rng-thumb-h) - var(--rng-h)) / 2));
          position: relative;
          width: var(--rng-thumb-w);
          z-index: var(--rng-thumb-z);
        }
        .c-rng:focus::-webkit-slider-thumb {
          box-shadow: var(--rng-thumb-bxsh--focus);
        }
        /* 
        =====
        TRACK
        =====
        */
        .c-rng::-moz-range-track {
          background: transparent;
          background-size: 100%;
          border-radius: var(--rng-bdrs);
          box-sizing: border-box;
          height: var(--rng-h);
        }
        .c-rng::-webkit-slider-runnable-track {
          background: transparent;
          background-size: 100%;
          border-radius: var(--rng-bdrs);
          box-sizing: border-box;
          height: var(--rng-h);
        }
        .c-rng,
        .c-rng::-webkit-slider-runnable-track,
        .c-rng::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
        }
        /* 
        ======
        LABELS
        ======
        */
        .c-rng::after,
        .c-rng::before {
          color: var(--rng-label-c);
          font-size: var(--rng-label-fz);
          line-height: 1;
          position: absolute;
          top: calc(var(--rng-h) + var(--rng-label-off));
          z-index: -1;
        }
        .c-rng[data-range*="labels"]::after {
          content: attr(max);
          right: 0;
        }
        .c-rng[data-range*="labels"]::before {
          content: attr(min);
        }
        .c-rng--labels-above .c-rng::after,
        .c-rng--labels-above .c-rng::before {
          top: -1rem; /* TODO */
        }
  
        /* 
        ======
        OUTPUT
        ======
        */
        .c-rng__output {
          --rng-output-bgc: #444;
          --rng-output-c: #EEE;
          --rng-output-p: 0.25rem 0 0 0;
          --rng-output-t: 0.25rem;
          --rng-output-w: 2rem;
  
          background-color: var(--rng-output-bgc);
          color: var(--rng-output-c);
          display: inline-block;
          font-family: sans-serif;
          font-size: 0.675rem;
          left: calc(1% * var(--rng-unit) - ((var(--rng-thumb-w) / 100) * var(--rng-unit)));
          padding: var(--rng-output-p);
          position: relative;
          text-align: center;
          top: var(--rng-output-t);
          width: var(--rng-output-w);
        }
        .c-rng__output::after {
          border-left: calc(var(--rng-output-w) / 2) solid transparent;
          border-right: calc(var(--rng-output-w) / 2) solid transparent;
          border-top: calc(var(--rng-output-w) / 3) solid var(--rng-output-bgc);
          content: "";
          height: 0; 
          left: 0;
          position: absolute;
          top: 100%;
          width: 0;
        }
        /* 
        =======
        WRAPPER
        =======
        */
        .c-rng__wrapper .c-rng {
          bottom: 1rem;
          left: 0;
          margin: 0;
          position: absolute;
        }
        .c-rng__wrapper .c-rng__output {
          position: absolute;
          top: 0;
        }
        .c-rng__wrapper {
          --rng-ticks-fill: #B0B0B0;
          flex: 1;
          height: 4rem; /* TODO */
          margin-bottom: 1rem;
          position: relative;
        }
        /* 
        =====
        MULTI
        =====
        */
        .c-rng__multi [data-range*="lower"] {
          --rng-bgi: linear-gradient(to right, var(--rng-upper) var(--rng-percent), var(--rng-lower) var(--rng-percent), var(--rng-lower) var(--rng-percent-upper), var(--rng-upper) var(--rng-percent-upper));
        }
        .c-rng__multi [data-range*="upper"] {
          background: none;
        }
        /*
        ========
        CIRCULAR
        ========
        */
        .c-rng--circular {
          --circle-bgc: var(--pico-card-background-color);
          --circle-size: calc(100vw - 70px);
          --track-bgc: var(--pico-switch-background-color);
          --track-fill: var(--pico-primary-background);
          --thumb-size: 30px;
  
          --gradient-start: 0deg;
          --gradient-end: 0deg;
  
          background-image: conic-gradient(var(--track-bgc) 0, var(--track-bgc) var(--gradient-start), var(--track-fill) var(--gradient-start), var(--track-fill) var(--gradient-end), var(--track-bgc) var(--gradient-end), var(--track-bgc));
          border-radius: 50%;
          display: inline-block;
          height: var(--circle-size);
          margin: 0.25rem;
          position: relative;
          touch-action: none;
          width: var(--circle-size);
        }
        .c-rng--circular::before {
          align-items: self-end;
          padding-bottom: 1rem;
          background-color: var(--circle-bgc);
          border-radius: 50%;
          content: attr(data-value);
          display: flex;
          font-family: ui-sans-serif, ui-system, sans-serif;
          font-size: 2rem;
          height: calc(var(--circle-size) - (var(--thumb-size) * 2));
          justify-content: center;
          left: var(--thumb-size);
          position: absolute;
          top: var(--thumb-size);
          width: calc(var(--circle-size) - (var(--thumb-size) * 2));
        }
        .c-rng--circular::after {
          background-color: var(--track-fill);
          border-radius: 50%;
          content: "";
          height: var(--thumb-size);
          position: absolute;
          left: calc(50% - (var(--thumb-size) / 2));
          width: var(--thumb-size);
        }
        .c-rng--circular-output {
          background: transparent;
          position: absolute;
          top: 50%;
          left: 50%;
          height: var(--thumb-size);
          margin-top: calc(var(--thumb-size) / -2);
          transform: rotate(var(--angle));
          transform-origin: center left;
          width: 50%;
          z-index: 1;
        }
        .c-rng--circular-output::before {
          background-color: var(--thumb-bgc, #FFF);
          border: var(--thumb-bdw, 2px) solid var(--track-fill);
          border-radius: 50%;
          box-shadow: var(--thumb-bxsh, none);
          box-sizing: border-box;
          content: "";
          cursor: grab;
          display: inline-block;
          height: var(--thumb-size);
          position: absolute;
          right: 0;
          width: var(--thumb-size);
        }
        .c-rng--circular-output:focus {
          --thumb-bxsh: inset 0 0 0 2px #FFF, inset 0 0 0 10px var(--track-fill);
          outline: none;
        }
        /*
        ======
        TICKS
        ======
        */
        .c-rng--ticks {
          fill: var(--rng-ticks-fill);
          bottom: 0;
          height: 1rem; /* TODO */
          left: 0;
          position: absolute;
          width: calc(100% - var(--rng-thumb-w));
          margin-left: calc(var(--rng-thumb-w) / 2);
        }
        .c-rng--ticks rect:first-of-type {
          transform: translateX(1px);
        }
        .c-rng--ticks rect:last-of-type {
          transform: translateX(-1px);
        }
        .c-rng--ticks-above .c-rng--ticks {
          bottom: auto;
          top: 1.25rem;
        }
        .c-rng--ticks-full .c-rng--ticks {
          --rng-ticks-fill: #ffccd5; /* TODO! */
          height: 2.5rem;
        }
  
        /* Modifiers */
        .c-rng--icons {
          --ico-audio: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 32"><path d="M27.814 28.814c-0.384 0-0.768-0.146-1.061-0.439-0.586-0.586-0.586-1.535 0-2.121 2.739-2.739 4.247-6.38 4.247-10.253s-1.508-7.514-4.247-10.253c-0.586-0.586-0.586-1.536 0-2.121s1.536-0.586 2.121 0c3.305 3.305 5.126 7.7 5.126 12.374s-1.82 9.069-5.126 12.374c-0.293 0.293-0.677 0.439-1.061 0.439zM22.485 25.985c-0.384 0-0.768-0.146-1.061-0.439-0.586-0.586-0.586-1.535 0-2.121 4.094-4.094 4.094-10.755 0-14.849-0.586-0.586-0.586-1.536 0-2.121s1.536-0.586 2.121 0c2.55 2.55 3.954 5.94 3.954 9.546s-1.404 6.996-3.954 9.546c-0.293 0.293-0.677 0.439-1.061 0.439v0zM17.157 23.157c-0.384 0-0.768-0.146-1.061-0.439-0.586-0.586-0.586-1.535 0-2.121 2.534-2.534 2.534-6.658 0-9.192-0.586-0.586-0.586-1.536 0-2.121s1.535-0.586 2.121 0c3.704 3.704 3.704 9.731 0 13.435-0.293 0.293-0.677 0.439-1.061 0.439z"></path><path d="M13 30c-0.26 0-0.516-0.102-0.707-0.293l-7.707-7.707h-3.586c-0.552 0-1-0.448-1-1v-10c0-0.552 0.448-1 1-1h3.586l7.707-7.707c0.286-0.286 0.716-0.372 1.090-0.217s0.617 0.519 0.617 0.924v26c0 0.404-0.244 0.769-0.617 0.924-0.124 0.051-0.254 0.076-0.383 0.076z"></path></svg>');
          --ico-mute: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 32"><path d="M13 30c-0.26 0-0.516-0.102-0.707-0.293l-7.707-7.707h-3.586c-0.552 0-1-0.448-1-1v-10c0-0.552 0.448-1 1-1h3.586l7.707-7.707c0.286-0.286 0.716-0.372 1.090-0.217s0.617 0.519 0.617 0.924v26c0 0.404-0.244 0.769-0.617 0.924-0.124 0.051-0.254 0.076-0.383 0.076z"></path></svg>');
          align-items: center;
          display: flex;
          width: 100%;
        }

        [data-icon] {
          --icon-bgc: #B0B0B0;
          --icon-w: 2rem;
          background-color: var(--icon-bgc);
          height: var(--icon-w);
          margin-top: 0.5rem;
          mask: no-repeat center/var(--icon-w) var(--icon);
          -webkit-mask: no-repeat center/var(--icon-w) var(--icon);
          width: var(--icon-w);
        }
        [data-icon="audio"] { --icon: var(--ico-audio); margin-left: 1rem }
        [data-icon="mute"] { --icon: var(--ico-mute); }
      `}
      </style>
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

class RangeSlider {
  constructor(element, settings) {
    this.settings = {
      clsCircular: 'c-rng--circular',
      clsCircularOutput: 'c-rng--circular-output',
      clsOutput: 'c-rng__output',
      clsOutputWrapper: 'c-rng--output',
      clsRangeTicks: 'c-rng--ticks',
      clsWrapper: 'c-rng__wrapper',
      offset: -90,
      varPercent: '--rng-percent',
      varPercentUpper: '--rng-percent-upper',
      varThumb: '--rng-thumb-w',
      varUnit: '--rng-unit',
      varValue: '--rng-value',
      ...stringToType(settings)
    };

    this.range = element;
    this.initRange(this.range);
  }

  /**
   * @function initRange
   * @param {Node} range
   * @description Initialize: Create elements, add eventListeners etc.
   */
  initRange(range) {
    const circular = this.settings.range.includes('circular');
    range.id = range.id || uuid();

    this.lower = this.settings.range.includes('upper')
      ? range.parentNode.querySelector(`[data-range*="lower"]`)
      : null;
    this.max = parseInt(range.max, 10) || 100;
    this.min = parseInt(range.min, 10);
    this.multiplier = 100 / (this.max - this.min);
    this.output =
      this.settings.range.includes('output') || circular
        ? document.createElement('output')
        : null;
    this.ticks = parseInt(range.dataset.ticks, 10);
    this.upper = this.settings.range.includes('lower')
      ? range.parentNode.querySelector(`[data-range*="upper"]`)
      : null;
    const isMulti = this.lower || this.upper;
    this.wrapper = isMulti ? range.parentNode : document.createElement('div');

    /* output */
    if (this.output) {
      this.output.className = circular
        ? this.settings.clsCircularOutput
        : this.settings.clsOutput;
      this.output.for = range.id;

      if (isMulti) {
        this.wrapper.insertBefore(this.output, range);
      } else {
        this.wrapper.classList.add(
          circular ? this.settings.clsCircular : this.settings.clsOutputWrapper
        );
        this.wrapper.appendChild(this.output);
      }
    }

    /* wrapper */
    if (!isMulti) {
      range.parentNode.insertBefore(this.wrapper, range);
      this.wrapper.appendChild(range);
    }
    if (range.dataset.modifier) {
      this.wrapper.classList.add(range.dataset.modifier);
    }

    this.wrapper.classList.add(this.settings.clsWrapper);
    this.wrapper.style.setProperty(
      this.settings.varThumb,
      getComputedStyle(range).getPropertyValue(this.settings.varThumb)
    );

    /* ticks */
    if (this.ticks) {
      const ticks = [...Array(this.ticks).keys()];
      const svg = `
          <svg class="${
            this.settings.clsRangeTicks
          }" width="100%" height="100%">
          ${ticks
            .map(
              (index) =>
                `<rect x="${
                  (100 / this.ticks) * index
                }%" y="5" width="1" height="100%"></rect>`
            )
            .join('')}
          <rect x="100%" y="5" width="1" height="100%"></rect>
        </svg>`;
      this.wrapper.insertAdjacentHTML('afterbegin', svg);
    }

    /* circular */
    if (circular) {
      range.hidden = true;
      const pointerMove = (event) =>
        this.updateCircle(this.rotate(event.pageX, event.pageY));
      this.setCenter();
      this.output.setAttribute('tabindex', 0);
      this.output.addEventListener('keydown', (event) => {
        switch (event.key) {
          case 'ArrowLeft':
          case 'ArrowDown':
            event.preventDefault();
            this.range.stepDown();
            this.updateCircle();
            break;
          case 'ArrowRight':
          case 'ArrowUp':
            event.preventDefault();
            this.range.stepUp();
            this.updateCircle();
            break;
          default:
            break;
        }
      });
      this.output.addEventListener('pointerdown', () =>
        this.output.addEventListener('pointermove', pointerMove)
      );
      this.output.addEventListener('pointerup', () =>
        this.output.removeEventListener('pointermove', pointerMove)
      );

      range.addEventListener('input', () => this.updateCircle(0));

      this.updateCircle();
    } else {
      range.addEventListener('input', () => this.updateRange());
    }

    /* TODO: Send init event ? */
    range.dispatchEvent(new Event('input'));
  }

  /**
   * @function rotate
   * @param {Number} x
   * @param {Number} y
   * @description  Returns angle from center of circle to current mouse x and y
   */
  rotate(x, y) {
    return (Math.atan2(y - this.center.y, x - this.center.x) * 180) / Math.PI;
  }

  /**
   * @function setCenter
   * @description Calculates center of circular range
   */
  setCenter() {
    const rect = this.wrapper.getBoundingClientRect();
    this.center = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2
    };
  }

  /**
   * @function updateCircle
   * @param {Number} start
   * @description  Updates CSS Custom Props/coniuc-gradient when circular-input is modified
   */
  updateCircle(start) {
    let angle = start;
    const rad = 360 / (this.max - this.min);
    if (!angle) {
      angle = rad * this.range.valueAsNumber + this.settings.offset;
    }
    let end = angle - this.settings.offset;
    if (end < 0) {
      end += 360;
    }

    const value = Math.ceil(end / rad);

    if (value > this.range.max || value < this.range.min) return;

    this.range.value = value;
    this.range.dispatchEvent(new Event('change', { bubbles: true }));

    this.wrapper.dataset.value = this.range.value;
    this.wrapper.style.setProperty('--angle', `${angle}deg`);
    this.wrapper.style.setProperty('--gradient-end', `${end}deg`);
  }

  /**
   * @function updateRange
   * @description Updates CSS Custom Props when range-input is modified
   */
  updateRange() {
    if (this.lower) {
      /* Active is `upper` */
      if (this.lower.valueAsNumber > this.range.valueAsNumber) {
        this.range.value = this.lower.valueAsNumber;
        this.range.dispatchEvent(new Event('input', { bubbles: true }));
        return;
      }
    }
    if (this.upper) {
      /* Active is `lower` */
      if (this.upper.valueAsNumber < this.range.valueAsNumber) {
        this.range.value = this.upper.valueAsNumber;
        this.range.dispatchEvent(new Event('input', { bubbles: true }));
        return;
      }
    }

    const value = (this.range.valueAsNumber - this.min) * this.multiplier;
    this.range.style.setProperty(this.settings.varPercent, `${value}%`);
    this.range.style.setProperty(
      this.settings.varValue,
      `${this.range.valueAsNumber}`
    );

    if (this.lower) {
      this.lower.style.setProperty(this.settings.varPercentUpper, `${value}%`);
    }

    if (this.output) {
      this.output.style.setProperty(this.settings.varUnit, `${value}`);
      this.output.innerText = this.range.value;
    }
  }
}

/* Helper methods */
function stringToType(obj) {
  const object = { ...obj };
  Object.keys(object).forEach((key) => {
    if (typeof object[key] === 'string' && object[key].charAt(0) === ':') {
      object[key] = JSON.parse(object[key].slice(1));
    }
  });
  return object;
}

function uuid() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}
