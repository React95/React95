import { DefaultTheme, IColors } from 'styled-components';
import BaseTheme, { generateShadows } from './baseTheme';

const colors: IColors = {
  anchor: '#1034a6',
  anchorVisited: '#440381',
  borderDark: '#446b7c',
  borderDarkest: '#000814',
  borderLight: '#adc8da',
  borderLightest: '#c3d9e9',
  canvas: '#f2ffff',
  canvasText: '#00010f',
  canvasTextDisabled: '#446b7c',
  canvasTextDisabledShadow: '#c3d9e9',
  canvasTextInvert: '#f2ffff',
  headerBackground: '#448199',
  headerNotActiveBackground: '#807f80',
  headerNotActiveText: '#c2c1c2',
  headerText: '#f2ffff',
  material: '#97b9cb',
  materialDark: '#9a9e9c',
  materialText: '#00010f',
  materialTextDisabled: '#446b7c',
  materialTextDisabledShadow: '#c3d9e9',
  materialTextInvert: '#f2ffff',
  progress: '#448199',
  tooltip: '#fefbcc',
};

const theme: DefaultTheme = {
  ...BaseTheme,
  colors,
  shadows: generateShadows(colors),
};

export default theme;
