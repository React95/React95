import { DefaultTheme, IColors } from 'styled-components';
import BaseTheme, { generateShadows } from './baseTheme';

const colors: IColors = {
  anchor: '#1034a6',
  anchorVisited: '#440381',
  borderDark: '#05427f',
  borderDarkest: '#000000',
  borderLight: '#2b8fff',
  borderLighter: '#8ac1ff',
  borderLightest: '#bedcff',
  canvas: '#000000',
  canvasText: '#ffffff',
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
  materialTextInvert: '#ffffff',
  progress: '#F46036',
  inputBackground: '#ffffff',
  inputBackgroundDisabled: '#2b8fff',
  tooltip: '#fefbcc',
};

const azureOrange: DefaultTheme = {
  ...BaseTheme,
  colors,
  shadows: generateShadows(colors),
};

export default azureOrange;
