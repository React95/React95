import { DefaultTheme, IColors } from 'styled-components';
import BaseTheme, { generateShadows } from './baseTheme';

const colors: IColors = {
  anchor: '#1034a6',
  anchorVisited: '#440381',
  borderDark: '#5f549b',
  borderDarkest: '#1c1449',
  borderLight: '#bcb4e9',
  borderLighter: '#dad5f2',
  borderLightest: '#eae7f7',
  canvas: '#ffffff',
  canvasText: '#050608',
  canvasTextDisabled: '#5f549b',
  canvasTextDisabledShadow: '#ffffff',
  canvasTextInvert: '#ffffff',
  headerBackground: '#5e4dba',
  headerNotActiveBackground: '#7f7f81',
  headerNotActiveText: '#ced0cf',
  headerText: '#ffffff',
  material: '#b1a7df',
  materialDark: '#9a9e9c',
  materialText: '#050608',
  materialTextDisabled: '#5f549b',
  materialTextDisabledShadow: '#ffffff',
  materialTextInvert: '#ffffff',
  progress: '#5e4dba',
  inputBackground: '#ffffff',
  inputBackgroundDisabled: '#bcb4e9',
  tooltip: '#fefbcc',
};

const theme: DefaultTheme = {
  ...BaseTheme,
  colors,
  shadows: generateShadows(colors),
};

export default theme;
