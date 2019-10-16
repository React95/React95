import React from 'react';
import { GlobalStyle, React95ThemeProvider } from '../../components';

const Frame = storyFn => (
  <React95ThemeProvider>
    <>
      <GlobalStyle />
      {storyFn()}
    </>
  </React95ThemeProvider>
);

export default Frame;
