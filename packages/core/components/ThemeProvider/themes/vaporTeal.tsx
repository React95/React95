import { DefaultTheme, IColors } from 'styled-components';
import BaseTheme, { generateShadows } from './baseTheme';

const colors: IColors = {
  anchor: '#1034a6',
  anchorVisited: '#440381',
  borderDark: '#00706f',
  borderDarkest: '#000000',
  borderLight: '#2fcecd',
  borderLighter: '#2fcecd',
  borderLightest: '#58ffff',
  canvas: '#000000',
  canvasText: '#98DFEA',
  canvasTextDisabled: '#00706f',
  canvasTextDisabledShadow: '#58ffff',
  canvasTextInvert: '#000000',
  headerBackground: '#246A73',
  headerNotActiveBackground: '#2fcecd',
  headerNotActiveText: '#246A73',
  headerText: '#58ffff',
  material: '#01a8a8',
  materialDark: '#246A73',
  materialText: '#000000',
  materialTextDisabled: '#00706f',
  materialTextDisabledShadow: '#58ffff',
  materialTextInvert: '#000000',
  progress: '#FF99C8',
  inputBackground: '#ffffff',
  inputBackgroundDisabled: '#2fcecd',
  tooltip: '#fefbcc',
};

const vaporTeal: DefaultTheme = {
  ...BaseTheme,
  colors,
  shadows: generateShadows(colors),
};

export default vaporTeal;
