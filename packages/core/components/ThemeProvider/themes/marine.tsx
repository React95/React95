import { DefaultTheme, IColors } from 'styled-components';
import BaseTheme, { generateShadows } from './baseTheme';

const colors: IColors = {
  anchor: '#1034a6',
  anchorVisited: '#440381',
  borderDark: '#3c8d88',
  borderDarkest: '#050608',
  borderLight: '#98d2cb',
  borderLightest: '#b1dfdf',
  canvas: '#c3e2da',
  canvasText: '#050608',
  canvasTextDisabled: '#3c8d88',
  canvasTextDisabledShadow: '#ffffff',
  canvasTextInvert: '#ffffff',
  headerBackground: '#000080',
  headerNotActiveBackground: '#7f7f7f',
  headerNotActiveText: '#ced0cf',
  headerText: '#ffffff',
  material: '#75c1ba',
  materialDark: '#9a9e9c',
  materialText: '#050608',
  materialTextDisabled: '#3c8d88',
  materialTextDisabledShadow: '#ffffff',
  materialTextInvert: '#ffffff',
  progress: '#000080',
  tooltip: '#fefbcc',
};

const theme: DefaultTheme = {
  ...BaseTheme,
  colors,
  shadows: generateShadows(colors),
};

export default theme;
