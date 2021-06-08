import { DefaultTheme, IColors } from 'styled-components';
import BaseTheme, { generateShadows } from './baseTheme';

const colors: IColors = {
  anchor: '#1034a6',
  anchorVisited: '#440381',
  borderDark: '#017401',
  borderDarkest: '#000000',
  borderLight: '#1dbc1b',
  borderLighter: '#72ea71',
  borderLightest: '#b1f3b0',
  canvas: '#000000',
  canvasText: '#ffffff',
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
  inputBackground: '#ffffff',
  inputBackgroundDisabled: '#e5e5e5',
  tooltip: '#fefbcc',
};

const ninjaTurtles: DefaultTheme = {
  ...BaseTheme,
  colors,
  shadows: generateShadows(colors),
};

export default ninjaTurtles;
