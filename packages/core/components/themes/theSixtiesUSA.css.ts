import { createGlobalTheme } from '@vanilla-extract/css';
import { theme, generateShadows } from './baseTheme';
import { contract } from './contract.css';

const colors = {
  anchor: '#1034a6',
  anchorVisited: '#440381',
  borderDark: '#6c1f71',
  borderDarkest: '#010001',
  borderLight: '#d982de',
  borderLighter: '#eabaec',
  borderLightest: '#f3d9f4',
  canvas: '#010001',
  canvasText: '#ffffff',
  headerBackground: '#050080',
  headerNotActiveBackground: '#a130a9',
  headerNotActiveText: '#df9be7',
  headerText: '#ffffff',
  material: '#d067d7',
  materialText: '#010001',
  materialTextDisabled: '#6c1f71',
  materialTextDisabledShadow: '#df9be7',
  materialTextInvert: '#ffffff',
  progress: '#0f0',
  inputBackground: '#ffffff',
  inputBackgroundDisabled: '#d982de',
};

createGlobalTheme(':root', contract, {
  ...theme,
  colors,
  shadows: generateShadows(colors),
});
