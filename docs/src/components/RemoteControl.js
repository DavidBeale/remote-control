import './FeatureSpeed.js';
import './FeatureGear.js';

const template = document.createElement('template');
template.innerHTML = `
  <style>
    section {
      display: flex;
      height: 100%;
      flex-direction: column;
    }

    fieldset {
      border: none;
    }

    #switches {
      flex-grow: 1;
    }

    #velocity {
      gap: 2rem;
      display: flex;
      flex-direction: column;
    }

    #direction {
      gap: 2rem;
      display: flex;
    }

    #direction > :nth-child(1) {
      flex-grow: 1;
    }
  </style>
  <section>
    <fieldset id="switches"></fieldset>
    <fieldset id="velocity">
      <div id="direction">
        <feature-gear></feature-gear>
        <button>Stop</button>
      </div>
      <feature-speed></feature-speed>
    </fieldset>
  </section>
`;

export default class RemoteControl extends HTMLElement {
  constructor() {
    super();

    if (!this.shadowRoot) {
      this.attachShadow({ mode: 'open' });
    }
  }

  async connectedCallback() {
    const clone = template.content.cloneNode(true);
    this.shadowRoot.appendChild(clone);
  }
}

window.customElements.define('remote-control', RemoteControl);
