import { DefaultTheme, IColors } from 'styled-components';
import BaseTheme, { generateShadows } from './baseTheme';

const colors: IColors = {
  anchor: '#1034a6',
  anchorVisited: '#440381',
  borderDark: '#6c684b',
  borderDarkest: '#020000',
  borderLight: '#e2ddc9',
  borderLightest: '#ffffff',
  canvas: '#ffffff',
  canvasText: '#020000',
  canvasTextDisabled: '#6c684b',
  canvasTextDisabledShadow: '#ffffff',
  canvasTextInvert: '#ffffff',
  headerBackground: '#8e0101',
  headerNotActiveBackground: '#90885c',
  headerNotActiveText: '#c2bfa3',
  headerText: '#ffffff',
  material: '#c2bfa3',
  materialDark: '#9a9e9c',
  materialText: '#020000',
  materialTextDisabled: '#6c684b',
  materialTextDisabledShadow: '#ffffff',
  materialTextInvert: '#ffffff',
  progress: '#8e0101',
  tooltip: '#fefbcc',
};

const theme: DefaultTheme = {
  ...BaseTheme,
  colors,
  shadows: generateShadows(colors),
};

export default theme;
