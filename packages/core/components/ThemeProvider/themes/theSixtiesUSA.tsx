import { DefaultTheme, IColors } from 'styled-components';
import BaseTheme, { generateShadows } from './baseTheme';

const colors: IColors = {
  anchor: '#1034a6',
  anchorVisited: '#440381',
  borderDark: '#6c1f71',
  borderDarkest: '#010001',
  borderLight: '#d982de',
  borderLighter: '#eabaec',
  borderLightest: '#f3d9f4',
  canvas: '#010001',
  canvasText: '#ffffff',
  canvasTextDisabled: '#6c1f71',
  canvasTextDisabledShadow: '#df9be7',
  canvasTextInvert: '#010001',
  headerBackground: '#050080',
  headerNotActiveBackground: '#a130a9',
  headerNotActiveText: '#df9be7',
  headerText: '#ffffff',
  material: '#d067d7',
  materialDark: '#9a9e9c',
  materialText: '#010001',
  materialTextDisabled: '#6c1f71',
  materialTextDisabledShadow: '#df9be7',
  materialTextInvert: '#ffffff',
  progress: '#0f0',
  inputBackground: '#ffffff',
  inputBackgroundDisabled: '#d982de',
  tooltip: '#fefbcc',
};

const theSixtiesUSA: DefaultTheme = {
  ...BaseTheme,
  colors,
  shadows: generateShadows(colors),
};

export default theSixtiesUSA;
