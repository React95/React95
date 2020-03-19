import React from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import PropTypes, { shape } from 'prop-types';

import mainTheme from './theme';

const ThemeProvider = ({ children, theme }) => (
  <SCThemeProvider theme={theme}>{children}</SCThemeProvider>
);

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
  theme: shape({}),
};

ThemeProvider.defaultProps = {
  theme: mainTheme,
};

export default ThemeProvider;
