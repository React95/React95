import { createGlobalTheme } from '@vanilla-extract/css';
import { theme, generateShadows } from './baseTheme';
import { contract } from './contract.css';

const colors = {
  anchor: '#1034a6',
  anchorVisited: '#440381',
  borderDark: '#8a5b68',
  borderDarkest: '#26030b',
  borderLight: '#e5bec8',
  borderLighter: '#f0dbe0',
  borderLightest: '#f6ebed',
  canvas: '#050608',
  canvasText: '#ffffff',
  headerBackground: '#ab5a71',
  headerNotActiveBackground: '#a19fa5',
  headerNotActiveText: '#615f68',
  headerText: '#ffffff',
  material: '#d6adb8',
  materialText: '#050608',
  materialTextDisabled: '#8a5b68',
  materialTextDisabledShadow: '#f1d4dc',
  materialTextInvert: '#ffffff',
  progress: '#ab5a71',
  inputBackground: '#ffffff',
  inputBackgroundDisabled: '#e5bec8',
};

createGlobalTheme(':root', contract, {
  ...theme,
  colors,
  shadows: generateShadows(colors),
});
