import { DefaultTheme, IColors } from 'styled-components';
import BaseTheme, { generateShadows } from './baseTheme';

const colors: IColors = {
  anchor: '#1034a6',
  anchorVisited: '#440381',
  borderDark: '#4f4c02',
  borderDarkest: '#000000',
  borderLight: '#9d9d11',
  borderLightest: '#fcfd3e',
  canvas: '#ffffff',
  canvasText: '#000000',
  canvasTextDisabled: '#4f4c02',
  canvasTextDisabledShadow: '#fcfd3e',
  canvasTextInvert: '#000000',
  headerBackground: '#F3DE2C',
  headerNotActiveBackground: '#4f4c02',
  headerNotActiveText: '#807f00',
  headerText: '#000000',
  material: '#807f00',
  materialDark: '#4f4c02',
  materialText: '#000000',
  materialTextDisabled: '#4f4c02',
  materialTextDisabledShadow: '#fcfd3e',
  materialTextInvert: '#000000',
  progress: '#F3DE2C',
  tooltip: '#fefbcc',
};

const theme: DefaultTheme = {
  ...BaseTheme,
  colors,
  shadows: generateShadows(colors),
};

export default theme;
