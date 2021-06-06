import { DefaultTheme, IColors } from 'styled-components';
import BaseTheme, { generateShadows } from './baseTheme';

const colors: IColors = {
  anchor: '#1034a6',
  anchorVisited: '#440381',
  borderDark: '#2c3125',
  borderDarkest: '#0a0a0a',
  borderLight: '#5d6d54',
  borderLighter: '#a4b39c',
  borderLightest: '#ccd5c8',
  canvas: '#3e4639',
  canvasText: '#f6fbf5',
  canvasTextDisabled: '#2c3125',
  canvasTextDisabledShadow: '#788475',
  canvasTextInvert: '#f6fbf5',
  headerBackground: '#4b5844',
  headerNotActiveBackground: '#4b5844',
  headerNotActiveText: '#74806e',
  headerText: '#fefefe',
  material: '#4b5844',
  materialDark: '#2f3428',
  materialText: '#f6fbf5',
  materialTextDisabled: '#2c3125',
  materialTextDisabledShadow: '#788475',
  materialTextInvert: '#fefefe',
  progress: '#978830',
  inputBackground: '#4b5844',
  inputBackgroundDisabled: '#2c3125',
  tooltip: '#fefbcc',
};

const counterStrike: DefaultTheme = {
  ...BaseTheme,
  colors,
  shadows: generateShadows(colors),
};

export default counterStrike;
