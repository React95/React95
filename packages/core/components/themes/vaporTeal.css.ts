import { createGlobalTheme } from '@vanilla-extract/css';
import { theme, generateShadows } from './baseTheme';
import { contract } from './contract.css';

const colors = {
  anchor: '#1034a6',
  anchorVisited: '#440381',
  borderDark: '#00706f',
  borderDarkest: '#000000',
  borderLight: '#2fcecd',
  borderLighter: '#2fcecd',
  borderLightest: '#58ffff',
  canvas: '#000000',
  canvasText: '#98DFEA',
  headerBackground: '#246A73',
  headerNotActiveBackground: '#2fcecd',
  headerNotActiveText: '#246A73',
  headerText: '#58ffff',
  material: '#01a8a8',
  materialText: '#000000',
  materialTextDisabled: '#00706f',
  materialTextDisabledShadow: '#58ffff',
  materialTextInvert: '#000000',
  progress: '#FF99C8',
  inputBackground: '#ffffff',
  inputBackgroundDisabled: '#2fcecd',
};

createGlobalTheme(':root', contract, {
  ...theme,
  colors,
  shadows: generateShadows(colors),
});
