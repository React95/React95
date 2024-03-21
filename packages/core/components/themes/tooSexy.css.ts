import { createGlobalTheme } from '@vanilla-extract/css';
import { theme, generateShadows } from './baseTheme';
import { contract } from './contract.css';

const colors = {
  anchor: '#1034a6',
  anchorVisited: '#440381',
  borderDark: '#5a0302',
  borderDarkest: '#000000',
  borderLight: '#c81d19',
  borderLighter: '#ed7673',
  borderLightest: '#f5b3b1',
  canvas: '#000000',
  canvasText: '#FFF1D0',
  headerBackground: '#161B33',
  headerNotActiveBackground: '#5a0302',
  headerNotActiveText: '#B80100',
  headerText: '#FFF1D0',
  material: '#B80100',
  materialText: '#000000',
  materialTextDisabled: '#5a0302',
  materialTextDisabledShadow: '#fe5757',
  materialTextInvert: '#ffffff',
  progress: '#474973',
  inputBackground: '#ffffff',
  inputBackgroundDisabled: '#c81d19',
};

createGlobalTheme(':root', contract, {
  ...theme,
  colors,
  shadows: generateShadows(colors),
});
