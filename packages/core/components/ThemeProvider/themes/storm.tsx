import { DefaultTheme, IColors } from 'styled-components';
import BaseTheme, { generateShadows } from './baseTheme';

const colors: IColors = {
  anchor: '#1034a6',
  anchorVisited: '#440381',
  borderDark: '#848584',
  borderDarkest: '#0a0a0a',
  borderLight: '#dfdfdf',
  borderLightest: '#fefefe',
  canvas: '#ffffff',
  canvasText: '#0a0a0a',
  canvasTextDisabled: '#848584',
  canvasTextDisabledShadow: '#fefefe',
  canvasTextInvert: '#fefefe',
  headerBackground: 'linear-gradient(to right, #8c0184, #0089ad)',
  headerNotActiveBackground: 'linear-gradient(to right, #7f7f81, transparent)',
  headerNotActiveText: '#ced0cf',
  headerText: '#ffffff',
  material: '#c6c6c6',
  materialDark: '#9a9e9c',
  materialText: '#0a0a0a',
  materialTextDisabled: '#848584',
  materialTextDisabledShadow: '#fefefe',
  materialTextInvert: '#fefefe',
  progress: '#8c0184',
  tooltip: '#fefbcc',
};

const theme: DefaultTheme = {
  ...BaseTheme,
  colors,
  shadows: generateShadows(colors),
};

export default theme;
