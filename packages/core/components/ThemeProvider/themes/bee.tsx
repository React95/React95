import { DefaultTheme, IColors } from 'styled-components';
import BaseTheme, { generateShadows } from './baseTheme';

const colors: IColors = {
  anchor: '#1034a6',
  anchorVisited: '#440381',
  borderDark: '#846d06',
  borderDarkest: '#0C1618',
  borderLight: '#e7c221',
  borderLighter: '#f1dd84',
  borderLightest: '#f7ecbb',
  canvas: '#0C1618',
  canvasText: '#ffffff',
  canvasTextDisabled: '#846d06',
  canvasTextDisabledShadow: '#f8df6e',
  canvasTextInvert: '#ffffff',
  headerBackground: '#0C1618',
  headerNotActiveBackground: '#7F7B82',
  headerNotActiveText: '#e5bd03',
  headerText: '#f8df6e',
  material: '#e5bd03',
  materialDark: '#7F7B82',
  materialText: '#0C1618',
  materialTextDisabled: '#846d06',
  materialTextDisabledShadow: '#f8df6e',
  materialTextInvert: '#ffffff',
  progress: '#0C1618',
  inputBackground: '#ffffff',
  inputBackgroundDisabled: '#e7c221',
  tooltip: '#fefbcc',
};

const bee: DefaultTheme = {
  ...BaseTheme,
  colors,
  shadows: generateShadows(colors),
};

export default bee;
