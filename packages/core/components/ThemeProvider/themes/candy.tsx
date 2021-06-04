import { DefaultTheme, IColors } from 'styled-components';
import BaseTheme, { generateShadows } from './baseTheme';

const colors: IColors = {
  anchor: '#1034a6',
  anchorVisited: '#440381',
  borderDark: '#d1579e',
  borderDarkest: '#44132f',
  borderLight: '#f1acd5',
  borderLightest: '#EFF1F3',
  canvas: '#EFF1F3',
  canvasText: '#000000',
  canvasTextDisabled: '#d1579e',
  canvasTextDisabledShadow: '#EFF1F3',
  canvasTextInvert: '#EFF1F3',
  headerBackground: '#87255B',
  headerNotActiveBackground: '#a08796',
  headerNotActiveText: '#EBD2BE',
  headerText: '#EFF1F3',
  material: '#E5A4CB',
  materialDark: '#9a9e9c',
  materialText: '#000000',
  materialTextDisabled: '#d1579e',
  materialTextDisabledShadow: '#EFF1F3',
  materialTextInvert: '#EFF1F3',
  progress: '#256EFF',
  tooltip: '#fefbcc',
};

const theme: DefaultTheme = {
  ...BaseTheme,
  colors,
  shadows: generateShadows(colors),
};

export default theme;
