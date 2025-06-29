import { theme, generateShadows } from '../baseTheme';

const colors = {
  anchor: '#8d88c2',
  anchorVisited: '#440381',
  borderDark: '#5b57a1',
  borderDarkest: '#010601',
  borderLight: '#a4a7c8',
  borderLighter: '#cccee0',
  borderLightest: '#e2e4ed',
  canvas: '#3B3D64',
  canvasText: '#050608',
  headerBackground: '#3B3D64',
  headerNotActiveBackground: '#6063a5',
  headerNotActiveText: '#a1a3ca',
  headerText: '#e2e4ed',
  material: '#a1a3ca',
  materialText: '#010601',
  materialTextDisabled: '#5b57a1',
  materialTextDisabledShadow: '#c7c7df',
  materialTextInvert: '#e2e4ed',
  progress: '#8d88c2',
  inputBackground: '#ffffff',
  inputBackgroundDisabled: '#a4a7c8',
};

export const tokens = {
  ...theme,
  colors: colors,
  shadows: generateShadows(colors),
};
