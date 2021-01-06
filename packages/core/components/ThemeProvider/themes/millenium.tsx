import { DefaultTheme, IColors } from 'styled-components';
import BaseTheme, { generateShadows } from './baseTheme';

const colors: IColors = {
  anchor: '#1034a6',
  anchorVisited: '#440381',
  borderDark: '#828282',
  borderDarkest: 'black',
  borderLight: '#e5e5e5',
  borderLightest: '#ffffff',
  canvas: '#ffffff',
  canvasText: 'black',
  canvasTextDisabled: '#828282',
  canvasTextDisabledShadow: '#ffffff',
  canvasTextInvert: '#ffffff',
  headerBackground: 'linear-gradient(to right, #012470, #a5c7e7)',
  headerNotActiveBackground: '#7f7f7f',
  headerNotActiveText: '#d6cfc7',
  headerText: '#ffffff',
  material: '#d6cfc7',
  materialDark: '#9a9e9c',
  materialText: 'black',
  materialTextDisabled: '#828282',
  materialTextDisabledShadow: '#ffffff',
  materialTextInvert: '#ffffff',
  progress: '#00256e',
  tooltip: '#fefbcc',
};

const theme: DefaultTheme = {
  ...BaseTheme,
  colors,
  shadows: generateShadows(colors),
};

export default theme;
