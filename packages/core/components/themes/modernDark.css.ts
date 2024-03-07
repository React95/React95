import { createTheme } from '@vanilla-extract/css';
import { theme, generateShadows } from './baseTheme.css';
import { contract } from './contract.css';

const colors = {
  anchor: '#1034a6',
  anchorVisited: '#440381',
  borderDark: '#121317',
  borderDarkest: '#000000',
  borderLight: '#31323c',
  borderLighter: '#85879b',
  borderLightest: '#bbbdc8',
  canvas: '#000000',
  canvasText: '#4b4d58',
  headerBackground: '#4b4d58',
  headerNotActiveBackground: 'transparent',
  headerNotActiveText: '#4b4d58',
  headerText: '#202127',
  material: '#202127',
  materialText: '#f88702',
  materialTextDisabled: '#4b4d58',
  materialTextDisabledShadow: '#121317',
  materialTextInvert: '#202127',
  progress: '#f88702',
  inputBackground: '#ffffff',
  inputBackgroundDisabled: '#31323c',
};

export const modernDark = createTheme(contract, {
  ...theme,
  colors,
  shadows: generateShadows(colors),
});
