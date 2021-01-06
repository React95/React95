import { DefaultTheme, IColors } from 'styled-components';
import BaseTheme, { generateShadows } from './baseTheme';

const colors: IColors = {
  anchor: '#1034a6',
  anchorVisited: '#440381',
  borderDark: '#05427f',
  borderDarkest: '#000000',
  borderLight: '#2b8fff',
  borderLightest: '#7ebfff',
  canvas: '#ffffff',
  canvasText: '#000000',
  canvasTextDisabled: '#05427f',
  canvasTextDisabledShadow: '#7ebfff',
  canvasTextInvert: '#000000',
  headerBackground: '#171123',
  headerNotActiveBackground: '#4E6766',
  headerNotActiveText: '#0180ff',
  headerText: '#ffffff',
  material: '#0180ff',
  materialDark: '#9a9e9c',
  materialText: '#000000',
  materialTextDisabled: '#05427f',
  materialTextDisabledShadow: '#7ebfff',
  materialTextInvert: '#000000',
  progress: '#F46036',
  tooltip: '#fefbcc',
};

const theme: DefaultTheme = {
  ...BaseTheme,
  colors,
  shadows: generateShadows(colors),
};

export default theme;
