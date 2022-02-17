

const template = document.createElement('template');
template.innerHTML = `
  <p>Hello <slot name="name" /></p>
  <button>Click</button>
`;

export default class RemoteControl extends HTMLElement {
  constructor() {
    super();

    if (!this.shadowRoot) {
      this.attachShadow({ mode: 'open' });
    }
  }

  async connectedCallback() {
    this.slots = htmlTemplateBind(template, this.shadowRoot);
    this.slots.name = 'David';
  }
}

window.customElements.define('remote-control', RemoteControl);


function htmlTemplateBind(template, domNode) {
  const templateSlots = template.content.querySelectorAll('slot[name]');

  const clone = template.content.cloneNode(true);
  domNode.appendChild(clone);

  const slots = {};
  Array.from(templateSlots).forEach(templateSlot => {
    let value;
    Object.defineProperty(slots, templateSlot.name, {
      get() { return value; },
      set(newValue) {
        value = newValue;
        const slotInstance = domNode.querySelector(`slot[name="${templateSlot.name}"]`);
        if (slotInstance) slotInstance.innerText = value;
      },
      enumerable: true,
      configurable: false
    })
  });

  return slots;
}
