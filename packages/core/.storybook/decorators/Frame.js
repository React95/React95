import React from 'react';
import { GlobalStyle, ThemeProvider } from '../../components';

const Frame = storyFn => (
  <ThemeProvider>
    <div style={{ padding: 10 }}>
      <GlobalStyle />
      {storyFn()}
    </div>
  </ThemeProvider>
);

export default Frame;
