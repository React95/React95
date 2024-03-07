import { createTheme } from '@vanilla-extract/css';
import { theme, generateShadows } from './baseTheme.css';
import { contract } from './contract.css';

const colors = {
  anchor: '#1034a6',
  anchorVisited: '#440381',
  borderDark: '#888c8f',
  borderDarkest: '#000000',
  borderLight: '#dfe0e3',
  borderLighter: '#ededef',
  borderLightest: '#f5f5f6',
  canvas: '#000000',
  canvasText: '#ffffff',
  headerBackground: '#000000',
  headerNotActiveBackground: '#ffffff',
  headerNotActiveText: '#000000',
  headerText: '#ffffff',
  material: '#ffffff',
  materialText: '#000000',
  materialTextDisabled: '#888c8f',
  materialTextDisabledShadow: '#ffffff',
  materialTextInvert: '#ffffff',
  progress: '#000000',
  inputBackground: '#ffffff',
  inputBackgroundDisabled: '#dfe0e3',
};

export const blackAndWhite = createTheme(contract, {
  ...theme,
  colors,
  shadows: generateShadows(colors),
});
