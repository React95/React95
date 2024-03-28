import { createGlobalTheme } from '@vanilla-extract/css';
import { theme, generateShadows } from './baseTheme';
import { contract } from './contract.css';

const colors = {
  anchor: '#1034a6',
  anchorVisited: '#440381',
  borderDark: '#05427f',
  borderDarkest: '#000000',
  borderLight: '#2b8fff',
  borderLighter: '#8ac1ff',
  borderLightest: '#bedcff',
  canvas: '#000000',
  canvasText: '#ffffff',
  headerBackground: '#171123',
  headerNotActiveBackground: '#4E6766',
  headerNotActiveText: '#0180ff',
  headerText: '#ffffff',
  material: '#0180ff',
  materialText: '#000000',
  materialTextDisabled: '#05427f',
  materialTextDisabledShadow: '#7ebfff',
  materialTextInvert: '#ffffff',
  progress: '#F46036',
  inputBackground: '#ffffff',
  inputBackgroundDisabled: '#2b8fff',
};

createGlobalTheme(':root', contract, {
  ...theme,
  colors,
  shadows: generateShadows(colors),
});
