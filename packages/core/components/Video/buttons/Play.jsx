import React from 'react';

export const DATA_TEST_ID = 'video-play';

const Play = props => (
  <svg
    height="6"
    viewBox="0 0 494.942 494.942"
    width="6"
    xmlns="http://www.w3.org/2000/svg"
    data-testid={DATA_TEST_ID}
    {...props}
  >
    <path d="M35.353 0l424.236 247.471L35.353 494.942z" />
  </svg>
);

export default Play;
