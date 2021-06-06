import { DefaultTheme, IColors } from 'styled-components';
import BaseTheme, { generateShadows } from './baseTheme';

const colors: IColors = {
  anchor: '#1034a6',
  anchorVisited: '#440381',
  borderDark: '#828282',
  borderDarkest: 'black',
  borderLight: '#e5e5e5',
  borderLighter: '#f0f0f0',
  borderLightest: '#f6f6f6',
  canvas: 'black',
  canvasText: '#ffffff',
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
  inputBackground: '#ffffff',
  inputBackgroundDisabled: '#e5e5e5',
  tooltip: '#fefbcc',
};

const millenium: DefaultTheme = {
  ...BaseTheme,
  colors,
  shadows: generateShadows(colors),
};

export default millenium;
