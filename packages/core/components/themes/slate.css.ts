import { createTheme } from '@vanilla-extract/css';
import { theme, generateShadows } from './baseTheme.css';
import { contract } from './contract.css';

const colors = {
  anchor: '#1034a6',
  anchorVisited: '#440381',
  borderDark: '#446b7c',
  borderDarkest: '#000814',
  borderLight: '#adc8da',
  borderLighter: '#d1e0ea',
  borderLightest: '#e5edf3',
  canvas: '#00010f',
  canvasText: '#f2ffff',
  headerBackground: '#448199',
  headerNotActiveBackground: '#807f80',
  headerNotActiveText: '#c2c1c2',
  headerText: '#f2ffff',
  material: '#97b9cb',
  materialText: '#00010f',
  materialTextDisabled: '#446b7c',
  materialTextDisabledShadow: '#c3d9e9',
  materialTextInvert: '#f2ffff',
  progress: '#448199',
  inputBackground: '#ffffff',
  inputBackgroundDisabled: '#adc8da',
};

export const slate = createTheme(contract, {
  ...theme,
  colors,
  shadows: generateShadows(colors),
});
