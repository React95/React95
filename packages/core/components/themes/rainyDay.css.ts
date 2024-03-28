import { createGlobalTheme } from '@vanilla-extract/css';
import { theme, generateShadows } from './baseTheme';
import { contract } from './contract.css';

const colors = {
  anchor: '#1034a6',
  anchorVisited: '#440381',
  borderDark: '#3d5367',
  borderDarkest: '#16233b',
  borderLight: '#91abc2',
  borderLighter: '#c2d0dd',
  borderLightest: '#dde5ec',
  canvas: '#050608',
  canvasText: '#ffffff',
  headerBackground: '#4b6480',
  headerNotActiveBackground: '#7f7f81',
  headerNotActiveText: '#ced0d9',
  headerText: '#ffffff',
  material: '#7a99b3',
  materialText: '#050608',
  materialTextDisabled: '#3d5367',
  materialTextDisabledShadow: '#b7cee5',
  materialTextInvert: '#ffffff',
  progress: '#4b6480',
  inputBackground: '#ffffff',
  inputBackgroundDisabled: '#91abc2',
};

createGlobalTheme(':root', contract, {
  ...theme,
  colors,
  shadows: generateShadows(colors),
});
