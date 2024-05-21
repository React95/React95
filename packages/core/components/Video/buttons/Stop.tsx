import React from 'react';
import type { HTMLAttributes } from 'react';

const Stop = (props: HTMLAttributes<SVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="6"
    height="6"
    aria-label="stop"
    {...props}
  >
    <path d="M0 0h306v306H0z" />
  </svg>
);

export default Stop;
