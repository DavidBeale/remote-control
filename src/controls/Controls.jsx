import { render } from 'preact';
import asWebComponent from 'as-web-component';

import SwitchFeature from './SwitchFeature';
import featureMap from '../services/FeatureMap.js';
import VelocityFeature from './VelocityFeature';

async function* Controls(service) {
  for await (const { props } of this({ service })) {
    const { features } = props.service;
    const velocity = features.find(
      (feature) => featureMap[feature.uuid]?.name === 'velocity'
    );

    yield (
      <section>
        <link rel="stylesheet" href="/dist/main.css"></link>
        <style>
          {`
          section {
            display: flex;
            flex-direction: column;
            height: calc(100vh - 5rem);
            margin-top: 1rem;
          }

          #top {
            flex: 2
          }

          #connect {
            margin: auto;
          }
        `}
        </style>

        <article id="top">
          <fieldset>
            {features
              .filter((feature) => featureMap[feature.uuid].label)
              .map((feature) => (
                <SwitchFeature feature={feature} />
              ))}
          </fieldset>
        </article>
        {velocity && <VelocityFeature feature={velocity} />}
      </section>
    );
  }
}

export default asWebComponent(Controls, render);
