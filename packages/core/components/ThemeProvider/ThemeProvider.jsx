import React from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import PropTypes, { shape } from 'prop-types';

import { ModalProvider } from '../Modal';
import mainTheme from './theme';

const ThemeProvider = ({ children, theme }) => (
  <SCThemeProvider theme={theme}>
    <ModalProvider>{children}</ModalProvider>
  </SCThemeProvider>
);

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
  theme: shape({}),
};

ThemeProvider.defaultProps = {
  theme: mainTheme,
};

export default ThemeProvider;
