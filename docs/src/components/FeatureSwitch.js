
const template = document.createElement('template');
template.innerHTML = `
  <label id="label" for="switch"><slot /></label>
  <input id="switch" type="checkbox" />
`;

export default class FeatureSwitch extends HTMLElement {
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

    const input = this.shadowRoot.getElementById('switch');
    input.addEventListener('click', async (event) => {
      if (!this._feature) return;
      if (event.target.checked) {
        await this._feature.writeValue(Uint8Array.from([1]));
      } else {
        await this._feature.writeValue(Uint8Array.from([0]));
      }
    });
  }

  set feature(feature) {
    this._feature = feature;
    subscribe.call(this, this._feature.value());
  }
}

window.customElements.define('feature-switch', FeatureSwitch);

async function subscribe(asyncInterator) {
  for await (let value of asyncInterator) {
    this.shadowRoot.getElementById('switch').checked = value.getUint8();
  }
}
