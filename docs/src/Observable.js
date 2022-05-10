

const template = document.createElement('template');
template.innerHTML = `
  <p id="one"></p>
  <p id="two"></p>
  <button id="butt">Click</button>
`;

const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

export default class Observable extends HTMLElement {
  constructor() {
    super();

    if (!this.shadowRoot) {
      this.attachShadow({ mode: 'open' });
    }
  }

  async connectedCallback() {
    const clone = template.content.cloneNode(true);
    this.shadowRoot.appendChild(clone);

    const labelOne = this.shadowRoot.getElementById('one');
    const labelTwo = this.shadowRoot.getElementById('two');

    const counter = multirate(counts());

    subscribe(counter(), labelOne);

    this.shadowRoot.getElementById('butt').addEventListener('click', () => {
      subscribe(counter(), labelTwo);
    });
  }
}

window.customElements.define('test-observable', Observable);

async function subscribe(asyncInterator, label) {
  for await (let count of asyncInterator) {
    label.innerText = count;
  }
}

async function* counts() {
  let count = 0;
  while (true) {
    await delay();
    yield ++count;
  }
}

function multirate(iterator) {
  let done = false;
  let value;
  let resolver;
  let rejector;

  let pending = new Promise((resolve, reject) => {
    resolver = resolve;
    rejector = reject;
  });

  (async () => {
    while (!done) {
      try {
        const result = await iterator.next();
        done = result.done;
        value = result.value;
        resolver(value);
      } catch (error) {
        rejector(error);
      } finally {
        pending = new Promise((resolve, reject) => {
          resolver = resolve;
          rejector = reject;
        });
      }
    }
  })();

  return async function* mutirator() {
    if (!done && value !== undefined) yield value;
    while(!done) yield await pending;
  };
}
