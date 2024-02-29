import { createTheme } from '@vanilla-extract/css';
import { theme, generateShadows } from './baseTheme.css';
import { contract } from './contract.css';

const colors = {
  anchor: '#1034a6',
  anchorVisited: '#440381',
  borderDark: '#1f2223',
  borderDarkest: '#070809',
  borderLight: '#5e696a',
  borderLighter: '#a4aeae',
  borderLightest: '#ccd2d2',
  canvas: '#2f3435',
  canvasText: '#F4F4ED',
  headerBackground: '#1f2223',
  headerNotActiveBackground: '#5e696a',
  headerNotActiveText: '#F4F4ED',
  headerText: '#F4F4ED',
  material: '#465051',
  materialText: '#F4F4ED',
  materialTextDisabled: '#1f2223',
  materialTextDisabledShadow: '#93a0a1',
  materialTextInvert: '#ffffff',
  progress: '#F61067',
  inputBackground: '#ffffff',
  inputBackgroundDisabled: '#5e696a',
};

export const tokyoDark = createTheme(contract, {
  ...theme,
  colors,
  shadows: generateShadows(colors),
});
