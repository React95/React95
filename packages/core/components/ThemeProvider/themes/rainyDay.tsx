import { DefaultTheme, IColors } from 'styled-components';
import BaseTheme, { generateShadows } from './baseTheme';

const colors: IColors = {
  anchor: '#1034a6',
  anchorVisited: '#440381',
  borderDark: '#3d5367',
  borderDarkest: '#16233b',
  borderLight: '#91abc2',
  borderLighter: '#c2d0dd',
  borderLightest: '#dde5ec',
  canvas: '#050608',
  canvasText: '#ffffff',
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
  inputBackground: '#ffffff',
  inputBackgroundDisabled: '#91abc2',
  tooltip: '#fefbcc',
};

const rainyDay: DefaultTheme = {
  ...BaseTheme,
  colors,
  shadows: generateShadows(colors),
};

export default rainyDay;
