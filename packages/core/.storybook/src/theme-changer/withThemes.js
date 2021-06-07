import * as React from 'react';
import { ThemeProvider } from '../../../components';

export const withThemes = (Story, context) => (
  <ThemeProvider theme={context.globals.selectedTheme}>
    <Story {...context} />
  </ThemeProvider>
);
