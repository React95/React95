import { createThemeContract } from '@vanilla-extract/css';

import { theme } from './baseTheme.css';

export const contract = createThemeContract({
  ...theme,
  shadows: {
    out: '',
    in: '',
    input: '',
    checkbox: '',
  },
});
