import { DefaultTheme, IColors } from 'styled-components';
import BaseTheme, { generateShadows } from './baseTheme';

const colors: IColors = {
  anchor: '#1034a6',
  anchorVisited: '#440381',
  borderDark: '#7b5f5b',
  borderDarkest: '#050608',
  borderLight: '#c3b1aa',
  borderLightest: '#e8dad6',
  canvas: '#dad0c7',
  canvasText: '#050608',
  canvasTextDisabled: '#7b5f5b',
  canvasTextDisabledShadow: '#e8dad6',
  canvasTextInvert: '#e8dad6',
  headerBackground: '#483f63',
  headerNotActiveBackground: '#7d5e58',
  headerNotActiveText: '#e8dad6',
  headerText: '#ffffff',
  material: '#ac978f',
  materialDark: '#9a9e9c',
  materialText: '#050608',
  materialTextDisabled: '#7b5f5b',
  materialTextDisabledShadow: '#e8dad6',
  materialTextInvert: '#ffffff',
  progress: '#483f63',
  tooltip: '#fefbcc',
};

const theme: DefaultTheme = {
  ...BaseTheme,
  colors,
  shadows: generateShadows(colors),
};

export default theme;
