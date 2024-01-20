import { createTheme } from '@vanilla-extract/css';

import { theme } from './baseTheme.css';
import { contract } from './contract.css';
import { generateShadows } from './baseTheme';

const colors = {
  anchor: '#000e7a',
  anchorVisited: '#440381',
  borderDark: '#868a8e',
  borderDarkest: '#000000',
  borderLight: '#d2d2d2',
  borderLighter: '#e6e6e6',
  borderLightest: '#ffffff',
  canvas: '#000000',
  canvasText: '#ffffff',
  canvasTextDisabled: '#848584',
  canvasTextDisabledShadow: '#fefefe',
  canvasTextInvert: '#fefefe',
  headerBackground: '#000e7a',
  headerNotActiveBackground: '#7f787f',
  headerNotActiveText: '#c6c6c6',
  headerText: '#fefefe',
  material: '#c3c7cb',
  materialDark: '#9a9e9c',
  materialText: '#000000',
  materialTextDisabled: '#868a8e',
  materialTextDisabledShadow: '#d2d2d2',
  materialTextInvert: '#ffffff',
  progress: '#000e7a',
  inputBackground: '#ffffff',
  inputBackgroundDisabled: '#d2d2d2',
  tooltip: '#fefbcc',
};

export const themeClass = createTheme(contract, {
  ...theme,
  colors,
  shadows: generateShadows(colors),
});
