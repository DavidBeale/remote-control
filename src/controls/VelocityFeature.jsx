import { render } from 'preact';
import asWebComponent from 'as-web-component';
import featureMap from '../services/FeatureMap.js';
import Throttle from './Throttle';
import Gear from './Gear.jsx';

async function* VelocityFeature(feature) {
  this.speed = 0;
  this.direction = 1;

  const changeSpeed = (event) => {
    this.speed = event.detail;
    this.props.feature.writeValue(
      Int8Array.from([this.speed * this.direction])
    );
  };

  const changeDirection = (event) => {
    this.direction = event.detail;
    this.props.feature.writeValue(
      Int8Array.from([this.speed * this.direction])
    );
  };

  [this.speed, this.direction] = splitValues(await feature.readValue());

  for await (const { props } of this(feature)) {
    props.feature.value.map((value) => {
      [this.speed, this.direction] = splitValues(value);
      return null;
    });

    const directionDisabled = this.speed !== 0;

    yield (
      <article>
        <link rel="stylesheet" href="/dist/main.css"></link>
        <style>
          {`
            article {
              margin-bottom: 0;
              --pico-block-spacing-vertical: .5rem;
            }        
        `}
        </style>
        <Gear
          gear={this.direction}
          gears={{
            Reverse: -1,
            Forward: 1
          }}
          step={2}
          disabled={directionDisabled}
          onChange={changeDirection}
        />
        <Throttle speed={this.speed} onChange={changeSpeed} />
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
