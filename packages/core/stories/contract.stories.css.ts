import { createGlobalTheme, style } from '@vanilla-extract/css';
import { contract } from '../components';

import { tokens as cs16 } from '../components/themes/tokens/counterStrike';

export const paragraph = style({});

createGlobalTheme('.contract-story', contract, {
  ...cs16,
  colors: {
    ...cs16.colors,
    material: 'thistle',
    headerBackground: 'tomato',
  },
});
