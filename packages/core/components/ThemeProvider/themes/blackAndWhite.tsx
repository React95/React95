import { DefaultTheme, IColors } from 'styled-components';
import BaseTheme, { generateShadows } from './baseTheme';

const colors: IColors = {
  anchor: '#1034a6',
  anchorVisited: '#440381',
  borderDark: '#888c8f',
  borderDarkest: '#000000',
  borderLight: '#dfe0e3',
  borderLightest: '#888c8f',
  canvas: '#ffffff',
  canvasText: '#000000',
  canvasTextDisabled: '#888c8f',
  canvasTextDisabledShadow: '#ffffff',
  canvasTextInvert: '#ffffff',
  headerBackground: '#000000',
  headerNotActiveBackground: '#ffffff',
  headerNotActiveText: '#000000',
  headerText: '#ffffff',
  material: '#ffffff',
  materialDark: '#9a9e9c',
  materialText: '#000000',
  materialTextDisabled: '#888c8f',
  materialTextDisabledShadow: '#ffffff',
  materialTextInvert: '#ffffff',
  progress: '#000000',
  tooltip: '#fefbcc',
};

const theme: DefaultTheme = {
  ...BaseTheme,
  colors,
  shadows: generateShadows(colors),
};

export default theme;
