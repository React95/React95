import { createGlobalTheme } from '@vanilla-extract/css';
import { theme, generateShadows } from './baseTheme';
import { contract } from './contract.css';

const colors = {
  anchor: '#1034a6',
  anchorVisited: '#440381',
  borderDark: '#828282',
  borderDarkest: 'black',
  borderLight: '#e5e5e5',
  borderLighter: '#f0f0f0',
  borderLightest: '#f6f6f6',
  canvas: 'black',
  canvasText: '#ffffff',
  headerBackground: 'linear-gradient(to right, #012470, #a5c7e7)',
  headerNotActiveBackground: '#7f7f7f',
  headerNotActiveText: '#d6cfc7',
  headerText: '#ffffff',
  material: '#d6cfc7',
  materialText: 'black',
  materialTextDisabled: '#828282',
  materialTextDisabledShadow: '#ffffff',
  materialTextInvert: '#ffffff',
  progress: '#00256e',
  inputBackground: '#ffffff',
  inputBackgroundDisabled: '#e5e5e5',
};

createGlobalTheme(':root', contract, {
  ...theme,
  colors,
  shadows: generateShadows(colors),
});
