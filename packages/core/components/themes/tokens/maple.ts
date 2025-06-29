import { theme, generateShadows } from '../baseTheme';

const colors = {
  anchor: '#1034a6',
  anchorVisited: '#440381',
  borderDark: '#ab9042',
  borderDarkest: '#2a1801',
  borderLight: '#f5e2bb',
  borderLighter: '#f9efd9',
  borderLightest: '#fbf6ea',
  canvas: '#2a1801',
  canvasText: '#ffffff',
  headerBackground: '#8e0101',
  headerNotActiveBackground: '#a1a0a5',
  headerNotActiveText: '#f5e2bb',
  headerText: '#ffffff',
  material: '#e5cc90',
  materialText: '#2a1801',
  materialTextDisabled: '#ab9042',
  materialTextDisabledShadow: '#ffffff',
  materialTextInvert: '#ffffff',
  progress: '#8e0101',
  inputBackground: '#ffffff',
  inputBackgroundDisabled: '#f5e2bb',
};

export const tokens = {
  ...theme,
  colors: colors,
  shadows: generateShadows(colors),
};
