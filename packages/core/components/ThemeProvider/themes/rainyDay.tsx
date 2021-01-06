import { DefaultTheme, IColors } from 'styled-components';
import BaseTheme, { generateShadows } from './baseTheme';

const colors: IColors = {
  anchor: '#1034a6',
  anchorVisited: '#440381',
  borderDark: '#3d5367',
  borderDarkest: '#16233b',
  borderLight: '#91abc2',
  borderLightest: '#b7cee5',
  canvas: '#ffffff',
  canvasText: '#050608',
  canvasTextDisabled: '#3d5367',
  canvasTextDisabledShadow: '#b7cee5',
  canvasTextInvert: '#ffffff',
  headerBackground: '#4b6480',
  headerNotActiveBackground: '#7f7f81',
  headerNotActiveText: '#ced0d9',
  headerText: '#ffffff',
  material: '#7a99b3',
  materialDark: '#9a9e9c',
  materialText: '#050608',
  materialTextDisabled: '#3d5367',
  materialTextDisabledShadow: '#b7cee5',
  materialTextInvert: '#ffffff',
  progress: '#4b6480',
  tooltip: '#fefbcc',
};

const theme: DefaultTheme = {
  ...BaseTheme,
  colors,
  shadows: generateShadows(colors),
};

export default theme;
