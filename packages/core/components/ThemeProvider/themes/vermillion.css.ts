import { createTheme } from '@vanilla-extract/css';
import { theme, generateShadows } from './baseTheme.css';
import { contract } from './contract.css';

const colors = {
  anchor: '#1034a6',
  anchorVisited: '#440381',
  borderDark: '#7f2120',
  borderDarkest: '#130405',
  borderLight: '#d25051',
  borderLighter: '#e69e9f',
  borderLightest: '#f1c9ca',
  canvas: '#130405',
  canvasText: '#EFE9F4',
  headerBackground: '#000103',
  headerNotActiveBackground: '#7f2120',
  headerNotActiveText: '#EFE9F4',
  headerText: '#EFE9F4',
  material: '#cf4545',
  materialText: '#130405',
  materialTextDisabled: '#7f2120',
  materialTextDisabledShadow: '#e59697',
  materialTextInvert: '#EFE9F4',
  progress: '#000103',
  inputBackground: '#ffffff',
  inputBackgroundDisabled: '#d25051',
};

export const vermillion = createTheme(contract, {
  ...theme,
  colors,
  shadows: generateShadows(colors),
});
