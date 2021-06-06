import { DefaultTheme, IColors } from 'styled-components';
import BaseTheme, { generateShadows } from './baseTheme';

const colors: IColors = {
  anchor: '#1034a6',
  anchorVisited: '#440381',
  borderDark: '#3c1f3e',
  borderDarkest: '#18051a',
  borderLight: '#945b9b',
  borderLighter: '#c5a3c9',
  borderLightest: '#dfcce1',
  canvas: '#18051a',
  canvasText: '#c47bcc',
  canvasTextDisabled: '#000000',
  canvasTextDisabledShadow: '#000000',
  canvasTextInvert: '#c57ece',
  headerBackground: '#1034a6',
  headerNotActiveBackground: '#210e23',
  headerNotActiveText: '#652a6d',
  headerText: '#010601',
  material: '#652a6d',
  materialDark: '#210e23',
  materialText: '#c57ece',
  materialTextDisabled: '#3c1f3e',
  materialTextDisabledShadow: '#c47bcc',
  materialTextInvert: '#c47bcc',
  progress: '#000080',
  inputBackground: '#ffffff',
  inputBackgroundDisabled: '#945b9b',
  tooltip: '#fefbcc',
};

const violetDark: DefaultTheme = {
  ...BaseTheme,
  colors,
  shadows: generateShadows(colors),
};

export default violetDark;
