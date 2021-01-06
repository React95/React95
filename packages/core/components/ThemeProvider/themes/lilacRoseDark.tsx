import { DefaultTheme, IColors } from 'styled-components';
import BaseTheme, { generateShadows } from './baseTheme';

const colors: IColors = {
  anchor: '#a65387',
  anchorVisited: '#440381',
  borderDark: '#7F3163',
  borderDarkest: '#190000',
  borderLight: '#E597C9',
  borderLightest: '#FFCAFC',
  canvas: '#dab1c7',
  canvasText: '#000000',
  canvasTextDisabled: '#000000',
  canvasTextDisabledShadow: '#000000',
  canvasTextInvert: '#ecbfe3',
  headerBackground: '#4C0030',
  headerNotActiveBackground: '#763a60',
  headerNotActiveText: '#b26496',
  headerText: '#dab1c7',
  material: '#b26496',
  materialDark: '#763a60',
  materialText: '#000000',
  materialTextDisabled: '#82416d',
  materialTextDisabledShadow: '#ecbfe3',
  materialTextInvert: '#ecbfe3',
  progress: '#713259',
  tooltip: '#fefbcc',
};

const theme: DefaultTheme = {
  ...BaseTheme,
  colors,
  shadows: generateShadows(colors),
};

export default theme;
