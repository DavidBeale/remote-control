import { render } from 'preact';
import asWebComponent, { dispatchEvent } from 'as-web-component';

import './Dial.css';

const trackPath = describeArc(150, 150, 150, 150 - 30, -150, 150);

function Dial(value = 0) {
  const angle = (300 / 100) * value - 150;
  return (
    <>
      <link rel="stylesheet" href="/dist/main.css"></link>
      <svg width="300" height="300">
        <path id="track" d={trackPath}></path>
        <path
          id="thumb"
          d={describeArc(150, 150, 150, 150 - 30, -150, angle)}
        ></path>
      </svg>
    </>
  );
}

export default asWebComponent(Dial, render);

function describeArc(x, y, innerRadius, outerRadius, startAngle, endAngle) {
  const radius = innerRadius;
  const spread = outerRadius - innerRadius;
  const innerStart = polarToCartesian(x, y, radius, endAngle);
  const innerEnd = polarToCartesian(x, y, radius, startAngle);
  const outerStart = polarToCartesian(x, y, radius + spread, endAngle);
  const outerEnd = polarToCartesian(x, y, radius + spread, startAngle);

  const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

  const d = [
    'M',
    outerStart.x,
    outerStart.y,
    'A',
    radius + spread,
    radius + spread,
    0,
    largeArcFlag,
    0,
    outerEnd.x,
    outerEnd.y,
    'L',
    innerEnd.x,
    innerEnd.y,
    'A',
    radius,
    radius,
    0,
    largeArcFlag,
    1,
    innerStart.x,
    innerStart.y,
    'L',
    outerStart.x,
    outerStart.y,
    'Z'
  ].join(' ');

  return d;
}

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians)
  };
}
