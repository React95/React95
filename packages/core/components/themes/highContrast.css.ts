import { createGlobalTheme } from '@vanilla-extract/css';
import { theme, generateShadows } from './baseTheme';
import { contract } from './contract.css';

const colors = {
  anchor: '#1034a6',
  anchorVisited: '#440381',
  borderDark: '#888c8f',
  borderDarkest: '#ffffff',
  borderLight: '#dfe0e3',
  borderLighter: '#ededef',
  borderLightest: '#f5f5f6',
  canvas: '#353535',
  canvasText: '#ffffff',
  headerBackground: '#8e0284',
  headerNotActiveBackground: '#7f7f7f',
  headerNotActiveText: '#ced0cf',
  headerText: '#ffffff',
  material: '#000000',
  materialText: '#ffffff',
  materialTextDisabled: '#888c8f',
  materialTextDisabledShadow: '#ffffff',
  materialTextInvert: '#ffffff',
  progress: '#8e0284',
  inputBackground: '#353535',
  inputBackgroundDisabled: '#dfe0e3',
};

createGlobalTheme(':root', contract, {
  ...theme,
  colors,
  shadows: generateShadows(colors),
});
