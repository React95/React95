import { createTheme } from '@vanilla-extract/css';
import { theme, generateShadows } from './baseTheme.css';
import { contract } from './contract.css';

const colors = {
  anchor: '#1034a6',
  anchorVisited: '#440381',
  borderDark: '#2c3125',
  borderDarkest: '#0a0a0a',
  borderLight: '#5d6d54',
  borderLighter: '#a4b39c',
  borderLightest: '#ccd5c8',
  canvas: '#3e4639',
  canvasText: '#f6fbf5',
  headerBackground: '#4b5844',
  headerNotActiveBackground: '#4b5844',
  headerNotActiveText: '#74806e',
  headerText: '#fefefe',
  material: '#4b5844',
  materialText: '#f6fbf5',
  materialTextDisabled: '#2c3125',
  materialTextDisabledShadow: '#788475',
  materialTextInvert: '#fefefe',
  progress: '#978830',
  inputBackground: '#4b5844',
  inputBackgroundDisabled: '#2c3125',
};

export const counterStrike = createTheme(contract, {
  ...theme,
  colors,
  shadows: generateShadows(colors),
});
