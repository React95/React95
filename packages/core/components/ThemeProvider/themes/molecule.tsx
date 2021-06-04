import { DefaultTheme, IColors } from 'styled-components';
import BaseTheme, { generateShadows } from './baseTheme';

const colors: IColors = {
  anchor: '#1034a6',
  anchorVisited: '#440381',
  borderDark: '#993845',
  borderDarkest: '#4b4d4e',
  borderLight: '#dfe0e3',
  borderLightest: '#d79099',
  canvas: '#f1f5f6',
  canvasText: '#020102',
  canvasTextDisabled: '#993845',
  canvasTextDisabledShadow: '#d79099',
  canvasTextInvert: '#f1f5f6',
  headerBackground: '#a03d49',
  headerNotActiveBackground: '#7f7f7f',
  headerNotActiveText: '#c2c1c2',
  headerText: '#f1f5f6',
  material: '#c2c1c2',
  materialDark: '#9a9e9c',
  materialText: '#020102',
  materialTextDisabled: '#993845',
  materialTextDisabledShadow: '#d79099',
  materialTextInvert: '#f1f5f6',
  progress: '#a03d49',
  tooltip: '#fefbcc',
};

const theme: DefaultTheme = {
  ...BaseTheme,
  colors,
  shadows: generateShadows(colors),
};

export default theme;
