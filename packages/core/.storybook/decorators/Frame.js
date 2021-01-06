import React from 'react';
import { GlobalStyle } from '../../components';

const Frame = Story => (
  <div style={{ padding: 10 }}>
    <GlobalStyle />
    <Story />
  </div>
);

export default Frame;
