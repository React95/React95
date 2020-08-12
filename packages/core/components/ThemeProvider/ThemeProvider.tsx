import * as React from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';

import { ModalProvider } from '../Modal';
import mainTheme, { ITheme } from './theme';

export type ThemeProviderProps = {
  theme: ITheme;
};

const ThemeProvider: React.FunctionComponent<ThemeProviderProps> = ({
  children,
  theme = mainTheme,
}) => (
  <SCThemeProvider theme={theme}>
    <ModalProvider>{children}</ModalProvider>
  </SCThemeProvider>
);

export default ThemeProvider;
