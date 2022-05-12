
const template = document.createElement('template');
template.innerHTML = `
  <style>
    #input {
      width: 50%;
      transform: scale(2);
      transform-origin: left bottom;
    }
  </style>
  <div>
    <input id="input" type="range" min="-1" max="1" value="0" step="1" list="tickmarks" />
    <datalist id="tickmarks">
      <option value="-1"></option>
      <option value="0"></option>
      <option value="1"></option>
    </datalist>
  </div>
`;

export default class FeatureGear extends HTMLElement {
  constructor() {
    super();

    this._feature;

    if (!this.shadowRoot) {
      this.attachShadow({ mode: 'open' });
    }
  }

  connectedCallback() {
    const clone = template.content.cloneNode(true);
    this.shadowRoot.appendChild(clone);

    const input = this.shadowRoot.getElementById('input');
    input.addEventListener('change', async (event) => {
      if (!this._feature) return;
      await this._feature.writeValue(Int8Array.from([Number(event.target.value)]));
    });
  }

  set feature(feature) {
    this._feature = feature;
    subscribe.call(this, this._feature.value());
  }
}

window.customElements.define('feature-gear', FeatureGear);

async function subscribe(asyncInterator) {
  for await (let value of asyncInterator) {
    this.shadowRoot.getElementById('value').value = value.getUint8();
  }
}
