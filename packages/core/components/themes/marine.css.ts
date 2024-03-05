import { createTheme } from '@vanilla-extract/css';
import { theme, generateShadows } from './baseTheme.css';
import { contract } from './contract.css';

const colors = {
  anchor: '#1034a6',
  anchorVisited: '#440381',
  borderDark: '#3c8d88',
  borderDarkest: '#050608',
  borderLight: '#98d2cb',
  borderLighter: '#c6e6e2',
  borderLightest: '#dff1ef',
  canvas: '#050608',
  canvasText: '#c3e2da',
  headerBackground: '#000080',
  headerNotActiveBackground: '#7f7f7f',
  headerNotActiveText: '#ced0cf',
  headerText: '#ffffff',
  material: '#75c1ba',
  materialText: '#050608',
  materialTextDisabled: '#3c8d88',
  materialTextDisabledShadow: '#ffffff',
  materialTextInvert: '#ffffff',
  progress: '#000080',
  inputBackground: '#ffffff',
  inputBackgroundDisabled: '#98d2cb',
};

export const marine = createTheme(contract, {
  ...theme,
  colors,
  shadows: generateShadows(colors),
});
