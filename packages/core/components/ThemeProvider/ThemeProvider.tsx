import * as React from 'react';
import { ThemeProvider as SCThemeProvider, DefaultTheme } from 'styled-components';

import mainTheme from './themes/default';

export type ThemeProviderProps = {
  theme?: DefaultTheme;
};

const ThemeProvider: React.FunctionComponent<ThemeProviderProps> = ({
  children,
  theme = mainTheme,
}) => (
  <SCThemeProvider theme={theme}>
    {children}
  </SCThemeProvider>
);

export default ThemeProvider;
