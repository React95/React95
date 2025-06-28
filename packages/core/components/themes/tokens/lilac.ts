import { theme, generateShadows } from '../baseTheme';

const colors = {
  anchor: '#1034a6',
  anchorVisited: '#440381',
  borderDark: '#5f549b',
  borderDarkest: '#1c1449',
  borderLight: '#bcb4e9',
  borderLighter: '#dad5f2',
  borderLightest: '#eae7f7',
  canvas: '#ffffff',
  canvasText: '#050608',
  headerBackground: '#5e4dba',
  headerNotActiveBackground: '#7f7f81',
  headerNotActiveText: '#ced0cf',
  headerText: '#ffffff',
  material: '#b1a7df',
  materialText: '#050608',
  materialTextDisabled: '#5f549b',
  materialTextDisabledShadow: '#ffffff',
  materialTextInvert: '#ffffff',
  progress: '#5e4dba',
  inputBackground: '#ffffff',
  inputBackgroundDisabled: '#bcb4e9',
};

export const tokens = {
  ...theme,
  colors: colors,
  shadows: generateShadows(colors),
};
