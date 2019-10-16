import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

import theme from './theme';

const React95ThemeProvider = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

React95ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default React95ThemeProvider;
