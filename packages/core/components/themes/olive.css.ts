import { createTheme } from '@vanilla-extract/css';
import { theme, generateShadows } from './baseTheme.css';
import { contract } from './contract.css';

const colors = {
  anchor: '#1034a6',
  anchorVisited: '#440381',
  borderDark: '#4f4c02',
  borderDarkest: '#000000',
  borderLight: '#9d9d11',
  borderLighter: '#ecec58',
  borderLightest: '#f4f4a3',
  canvas: '#000000',
  canvasText: '#ffffff',
  headerBackground: '#F3DE2C',
  headerNotActiveBackground: '#4f4c02',
  headerNotActiveText: '#807f00',
  headerText: '#000000',
  material: '#807f00',
  materialText: '#000000',
  materialTextDisabled: '#4f4c02',
  materialTextDisabledShadow: '#fcfd3e',
  materialTextInvert: '#000000',
  progress: '#F3DE2C',
  inputBackground: '#ffffff',
  inputBackgroundDisabled: '#9d9d11',
};

export const olive = createTheme(contract, {
  ...theme,
  colors,
  shadows: generateShadows(colors),
});
