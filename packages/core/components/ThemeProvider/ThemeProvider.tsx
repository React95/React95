import * as React from 'react';
import {
  ThemeProvider as SCThemeProvider,
  DefaultTheme,
} from 'styled-components';

import mainTheme from './themes/win95';
import themes from './themes';

export type ThemeProviderProps = {
  theme?: DefaultTheme | string;
};

const ThemeProvider: React.FunctionComponent<ThemeProviderProps> = ({
  children,
  theme,
}) => {
  if (typeof theme == 'string') {
    if (themes[theme] != null) {
      theme = themes[theme];
    } else {
      theme = mainTheme;
    }
  }
  theme = typeof theme == 'object' ? theme : mainTheme;
  return <SCThemeProvider theme={theme}>{children}</SCThemeProvider>;
};

ThemeProvider.defaultProps = {
  theme: 'win95',
};

export default ThemeProvider;
