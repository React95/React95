import React from 'react';
import { GlobalStyle, ThemeProvider } from '../../components';

const Frame = Story => (
  <ThemeProvider>
    <div style={{ padding: 10 }}>
      <GlobalStyle />
      <Story />
    </div>
  </ThemeProvider>
);

export default Frame;
