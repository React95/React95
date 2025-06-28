import { theme, generateShadows } from '../baseTheme';

const colors = {
  anchor: '#1034a6',
  anchorVisited: '#440381',
  borderDark: '#6c684b',
  borderDarkest: '#020000',
  borderLight: '#e2ddc9',
  borderLighter: '#efece1',
  borderLightest: '#f6f4ee',
  canvas: '#ffffff',
  canvasText: '#020000',
  headerBackground: '#8e0101',
  headerNotActiveBackground: '#90885c',
  headerNotActiveText: '#c2bfa3',
  headerText: '#ffffff',
  material: '#c2bfa3',
  materialText: '#020000',
  materialTextDisabled: '#6c684b',
  materialTextDisabledShadow: '#ffffff',
  materialTextInvert: '#ffffff',
  progress: '#8e0101',
  inputBackground: '#ffffff',
  inputBackgroundDisabled: '#e2ddc9',
};

export const tokens = {
  ...theme,
  colors: colors,
  shadows: generateShadows(colors),
};
