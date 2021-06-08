import * as React from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';

import { ModalProvider } from '../Modal';
import themes from './themes';

export type ThemeProviderProps = {
  theme: keyof typeof themes;
};

const ThemeProvider: React.FunctionComponent<ThemeProviderProps> = ({
  children,
  theme,
}) => (
  <SCThemeProvider theme={themes[theme] || themes.win95}>
    <ModalProvider>{children}</ModalProvider>
  </SCThemeProvider>
);

ThemeProvider.defaultProps = {
  theme: 'win95',
};

export default ThemeProvider;
