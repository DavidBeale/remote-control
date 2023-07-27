import { render } from 'preact';
import asWebComponent from 'as-web-component';
import featureMap from '../services/FeatureMap.js';
import Throttle from './Throttle';

const template = document.createElement('template');
template.innerHTML = `
  <label id="label" for="switch"></label>
  <input id="switch" type="checkbox" />
`;

async function* VelocityFeature(feature) {
  this.speed = 0;
  this.direction = 1;

  const change = (event) => {
    this.speed = event.detail;
    this.props.feature.writeValue(
      Int8Array.from([this.speed * this.direction])
    );
  };

  for await (const { props } of this(feature)) {
    [this.speed, this.direction] = splitValues(await props.feature.readValue());
    props.feature.value.map((value) => {
      [this.speed, this.direction] = splitValues(value);
      return null;
    });

    yield (
      <article>
        <link rel="stylesheet" href="/dist/main.css"></link>
        <Throttle speed={this.speed} onChange={change}></Throttle>
      </article>
    );
  }
}

export default asWebComponent(VelocityFeature, render);

function splitValues(value) {
  const velocity = value.getInt8(0);
  const speed = Math.abs(velocity);
  let direction = 1;

  if (velocity < 0) {
    direction = -1;
  }

  return [speed, direction];
}
