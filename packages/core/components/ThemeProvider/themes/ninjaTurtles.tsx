import { DefaultTheme, IColors } from 'styled-components';
import BaseTheme, { generateShadows } from './baseTheme';

const colors: IColors = {
  anchor: '#1034a6',
  anchorVisited: '#440381',
  borderDark: '#017401',
  borderDarkest: '#000000',
  borderLight: '#1dbc1b',
  borderLightest: '#55fd55',
  canvas: '#ffffff',
  canvasText: '#000000',
  canvasTextDisabled: '#017401',
  canvasTextDisabledShadow: '#55fd55',
  canvasTextInvert: '#000000',
  headerBackground: '#FF1D15',
  headerNotActiveBackground: '#7f7f7f',
  headerNotActiveText: '#000000',
  headerText: '#ffffff',
  material: '#00a800',
  materialDark: '#9a9e9c',
  materialText: '#000000',
  materialTextDisabled: '#017401',
  materialTextDisabledShadow: '#55fd55',
  materialTextInvert: '#000000',
  progress: '#FF1D15',
  tooltip: '#fefbcc',
};

const theme: DefaultTheme = {
  ...BaseTheme,
  colors,
  shadows: generateShadows(colors),
};

export default theme;
