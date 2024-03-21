import { createGlobalTheme } from '@vanilla-extract/css';
import { theme, generateShadows } from './baseTheme';
import { contract } from './contract.css';

const colors = {
  anchor: '#1034a6',
  anchorVisited: '#440381',
  borderDark: '#993845',
  borderDarkest: '#4b4d4e',
  borderLight: '#dfe0e3',
  borderLighter: '#dfe0e3',
  borderLightest: '#d79099',
  canvasText: '#f1f5f6',
  canvas: '#020102',
  headerBackground: '#a03d49',
  headerNotActiveBackground: '#7f7f7f',
  headerNotActiveText: '#c2c1c2',
  headerText: '#f1f5f6',
  material: '#c2c1c2',
  materialText: '#020102',
  materialTextDisabled: '#993845',
  materialTextDisabledShadow: '#d79099',
  materialTextInvert: '#f1f5f6',
  progress: '#a03d49',
  inputBackground: '#ffffff',
  inputBackgroundDisabled: '#dfe0e3',
};

createGlobalTheme(':root', contract, {
  ...theme,
  colors,
  shadows: generateShadows(colors),
});
