import React from 'react';
import { ThemeProvider, GlobalStyle } from '@react95/core';
import { createGlobalStyle } from '@xstyled/styled-components';

const DesktopStyle = createGlobalStyle`
  html {
    height: calc(100% - 28px);
  }

  body {
    height: 100%;
  }
`;

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
);

export const wrapPageElement = ({ element }) => (
  <>
    <GlobalStyle />
    <DesktopStyle />

    {element}
  </>
);
