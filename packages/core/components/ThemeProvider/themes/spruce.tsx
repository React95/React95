import { DefaultTheme, IColors } from 'styled-components';
import BaseTheme, { generateShadows } from './baseTheme';

const colors: IColors = {
  anchor: '#1034a6',
  anchorVisited: '#440381',
  borderDark: '#477b5e',
  borderDarkest: '#001004',
  borderLight: '#b0d2bb',
  borderLighter: '#d3e6d9',
  borderLightest: '#e6f1ea',
  canvas: '#050608',
  canvasText: '#fcfff6',
  canvasTextDisabled: '#3d5367',
  canvasTextDisabledShadow: '#cdead2',
  canvasTextInvert: '#fcfff6',
  headerBackground: '#3d9961',
  headerNotActiveBackground: '#807f80',
  headerNotActiveText: '#d4deda',
  headerText: '#fcfff6',
  material: '#99c9a8',
  materialDark: '#9a9e9c',
  materialText: '#050608',
  materialTextDisabled: '#3d5367',
  materialTextDisabledShadow: '#cdead2',
  materialTextInvert: '#fcfff6',
  progress: '#3d9961',
  inputBackground: '#ffffff',
  inputBackgroundDisabled: '#b0d2bb',
  tooltip: '#fefbcc',
};

const spruce: DefaultTheme = {
  ...BaseTheme,
  colors,
  shadows: generateShadows(colors),
};

export default spruce;
