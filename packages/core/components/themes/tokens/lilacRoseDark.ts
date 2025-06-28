import { theme, generateShadows } from '../baseTheme';

const colors = {
  anchor: '#a65387',
  anchorVisited: '#440381',
  borderDark: '#7F3163',
  borderDarkest: '#190000',
  borderLight: '#E597C9',
  borderLighter: '#f0c5e1',
  borderLightest: '#f6dfee',
  canvas: '#000000',
  canvasText: '#f6dfee',
  headerBackground: '#4C0030',
  headerNotActiveBackground: '#763a60',
  headerNotActiveText: '#b26496',
  headerText: '#dab1c7',
  material: '#b26496',
  materialText: '#000000',
  materialTextDisabled: '#82416d',
  materialTextDisabledShadow: '#ecbfe3',
  materialTextInvert: '#ecbfe3',
  progress: '#713259',
  inputBackground: '#ffffff',
  inputBackgroundDisabled: '#E597C9',
};

export const tokens = {
  ...theme,
  colors: colors,
  shadows: generateShadows(colors),
};
