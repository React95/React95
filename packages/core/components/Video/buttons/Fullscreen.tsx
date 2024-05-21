import React from 'react';
import type { HTMLAttributes } from 'react';

const Fullscreen = (props: HTMLAttributes<SVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="6"
    viewBox="0 0 24 24"
    height="6"
    aria-label="fullscreen"
    {...props}
  >
    <path
      d="M24 9h-2v-5h-7v-2h9v7zm-9 13v-2h7v-5h2v7h-9zm-15-7h2v5h7v2h-9v-7zm9-13v2h-7v5h-2v-7h9zm11 4h-16v12h16v-12z"
      style={{ width: 1000 }}
    />
  </svg>
);

export default Fullscreen;
