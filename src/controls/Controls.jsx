import { render } from 'preact';
import asWebComponent from 'as-web-component';

import SwitchFeature from './SwitchFeature.jsx';
import featureMap from '../services/FeatureMap.js';
import VelocityFeature from './VelocityFeature.jsx';

async function Controls(service) {
  const { features } = service;
  const velocity = features.find(
    (feature) => featureMap[feature.uuid]?.name === 'velocity'
  );

  return (
    <section>
      <link rel="stylesheet" href="/dist/main.css"></link>
      <style>
        {`
          section {
            display: flex;
            flex-direction: column;
            padding-block: 1rem;
            height: 100%;
          }

          #connect {
            margin: auto;
          }

          article {
            flex: 1;
            --pico-block-spacing-vertical: var(--pico-spacing);
            padding-bottom: 0;
          }

          fieldset {
            margin-bottom: 0;
          }
        `}
      </style>

      <article>
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

export default asWebComponent(Controls, render);
