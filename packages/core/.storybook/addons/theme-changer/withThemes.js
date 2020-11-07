import * as React from "react";
import { ThemeProvider } from '../../../components';

export const withThemes=(Story, context)=>{
  const theme = context.globals.selectedTheme;
  return (
    <ThemeProvider theme={theme}>
      <Story {...context} />
    </ThemeProvider>
  )
}