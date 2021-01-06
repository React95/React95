import { DefaultTheme, IColors } from 'styled-components';
import BaseTheme, { generateShadows } from './baseTheme';

const colors: IColors = {
  anchor: '#8d88c2',
  anchorVisited: '#440381',
  borderDark: '#5b57a1',
  borderDarkest: '#010601',
  borderLight: '#a4a7c8',
  borderLightest: '#c7c7df',
  canvas: '#c7c7df',
  canvasText: '#050608',
  canvasTextDisabled: '#888c8f',
  canvasTextDisabledShadow: '#ffffff',
  canvasTextInvert: '#ffffff',
  headerBackground: '#3B3D64',
  headerNotActiveBackground: '#6063a5',
  headerNotActiveText: '#a1a3ca',
  headerText: '#010601',
  material: '#a1a3ca',
  materialDark: '#6063a5',
  materialText: '#010601',
  materialTextDisabled: '#5b57a1',
  materialTextDisabledShadow: '#c7c7df',
  materialTextInvert: '#c7c7df',
  progress: '#8d88c2',
  tooltip: '#fefbcc',
};

const theme: DefaultTheme = {
  ...BaseTheme,
  colors,
  shadows: generateShadows(colors),
};

export default theme;
