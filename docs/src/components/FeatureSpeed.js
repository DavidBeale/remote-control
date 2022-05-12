
const template = document.createElement('template');
template.innerHTML = `
  <style>
    #input {
      width: 50%;
      transform: scale(2);
      transform-origin: left bottom;
    }

    #value {
      width: 100%;
    }
  </style>
  <div>
    <input id="input" type="range" min="0" max="100" value="0" step="10" list="tickmarks" />
    <datalist id="tickmarks">
      <option value="0"></option>
      <option value="10"></option>
      <option value="20"></option>
      <option value="30"></option>
      <option value="40"></option>
      <option value="50"></option>
      <option value="60"></option>
      <option value="70"></option>
      <option value="80"></option>
      <option value="90"></option>
      <option value="100"></option>
    </datalist>
    <meter id="value" min="0" max="100" value="0" ></meter>
  </div>
`;

export default class FeatureSpeed extends HTMLElement {
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

window.customElements.define('feature-speed', FeatureSpeed);

async function subscribe(asyncInterator) {
  for await (let value of asyncInterator) {
    this.shadowRoot.getElementById('value').value = value.getUint8();
  }
}
