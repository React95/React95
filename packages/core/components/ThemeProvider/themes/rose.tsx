import { DefaultTheme, IColors } from 'styled-components';
import BaseTheme, { generateShadows } from './baseTheme';

const colors: IColors = {
  anchor: '#1034a6',
  anchorVisited: '#440381',
  borderDark: '#8a5b68',
  borderDarkest: '#26030b',
  borderLight: '#e5bec8',
  borderLighter: '#f0dbe0',
  borderLightest: '#f6ebed',
  canvas: '#050608',
  canvasText: '#ffffff',
  canvasTextDisabled: '#8a5b68',
  canvasTextDisabledShadow: '#f1d4dc',
  canvasTextInvert: '#ffffff',
  headerBackground: '#ab5a71',
  headerNotActiveBackground: '#a19fa5',
  headerNotActiveText: '#615f68',
  headerText: '#ffffff',
  material: '#d6adb8',
  materialDark: '#9a9e9c',
  materialText: '#050608',
  materialTextDisabled: '#8a5b68',
  materialTextDisabledShadow: '#f1d4dc',
  materialTextInvert: '#ffffff',
  progress: '#ab5a71',
  inputBackground: '#ffffff',
  inputBackgroundDisabled: '#e5bec8',
  tooltip: '#fefbcc',
};

const rose: DefaultTheme = {
  ...BaseTheme,
  colors,
  shadows: generateShadows(colors),
};

export default rose;
