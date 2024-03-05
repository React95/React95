import { createTheme } from '@vanilla-extract/css';
import { theme, generateShadows } from './baseTheme.css';
import { contract } from './contract.css';

const colors = {
  anchor: '#1034a6',
  anchorVisited: '#440381',
  borderDark: '#d1579e',
  borderDarkest: '#44132f',
  borderLight: '#f1acd5',
  borderLighter: '#f7d1e7',
  borderLightest: '#fae5f1',
  canvas: '#EFF1F3',
  canvasText: '#000000',
  headerBackground: '#87255B',
  headerNotActiveBackground: '#a08796',
  headerNotActiveText: '#EBD2BE',
  headerText: '#EFF1F3',
  material: '#E5A4CB',
  materialText: '#000000',
  materialTextDisabled: '#d1579e',
  materialTextDisabledShadow: '#EFF1F3',
  materialTextInvert: '#EFF1F3',
  progress: '#256EFF',
  inputBackground: '#ffffff',
  inputBackgroundDisabled: '#f1acd5',
};

export const candy = createTheme(contract, {
  ...theme,
  colors,
  shadows: generateShadows(colors),
});
