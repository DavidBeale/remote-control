import { render } from 'preact';
import asWebComponent from 'as-web-component';
import featureMap from '../services/FeatureMap.js';

const template = document.createElement('template');
template.innerHTML = `
  <label id="label" for="switch"></label>
  <input id="switch" type="checkbox" />
`;

async function* SwitchFeature(feature) {
  this.checked = false;

  const checked = (event) => {
    if (event.target.checked) {
      this.props.feature.writeValue(Uint8Array.from([1]));
    } else {
      this.props.feature.writeValue(Uint8Array.from([0]));
    }
  };

  for await (const { props } of this(feature)) {
    this.checked = (await props.feature.readValue()).getUint8();
    props.feature.value.map((value) => {
      this.checked = value.getUint8();
      return null;
    });

    yield (
      <>
        <link rel="stylesheet" href="/dist/main.css"></link>
        <label>
          <input
            type="checkbox"
            role="switch"
            checked={this.checked}
            onChange={checked}
          />
          {featureMap[props.feature.uuid].label}
        </label>
      </>
    );
  }
}

export default asWebComponent(SwitchFeature, render);
