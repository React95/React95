import { DefaultTheme, IColors } from 'styled-components';
import BaseTheme, { generateShadows } from './baseTheme';

const colors: IColors = {
  anchor: '#72b3b4',
  anchorVisited: '#440381',
  borderDark: '#888c8f',
  borderDarkest: '#050608',
  borderLight: '#dfe0e3',
  borderLightest: '#ffffff',
  canvas: '#ffffff',
  canvasText: '#050608',
  canvasTextDisabled: '#888c8f',
  canvasTextDisabledShadow: '#ffffff',
  canvasTextInvert: '#ffffff',
  headerBackground: '#72b3b4',
  headerNotActiveBackground: '#9a9e9c',
  headerNotActiveText: '#ced0cf',
  headerText: '#ffffff',
  material: '#ced0cf',
  materialDark: '#9a9e9c',
  materialText: '#050608',
  materialTextDisabled: '#888c8f',
  materialTextDisabledShadow: '#ffffff',
  materialTextInvert: '#ffffff',
  progress: '#72b3b4',
  tooltip: '#fefbcc',
};

const theme: DefaultTheme = {
  ...BaseTheme,
  colors,
  shadows: generateShadows(colors),
};

export default theme;
