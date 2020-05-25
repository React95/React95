import React from 'react';

export const DATA_TEST_ID = 'video-pause';

const Pause = props => (
  <svg
    height="6"
    viewBox="0 0 424.236 424.236"
    width="6"
    xmlns="http://www.w3.org/2000/svg"
    data-testid={DATA_TEST_ID}
    {...props}
  >
    <path d="M256.471 2h176.765v424.236H256.471zM2 2h176.765v424.236H2z" />
  </svg>
);

export default Pause;
