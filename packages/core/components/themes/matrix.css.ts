import { createTheme } from '@vanilla-extract/css';
import { theme, generateShadows } from './baseTheme.css';
import { contract } from './contract.css';

const colors = {
  anchor: '#1034a6',
  anchorVisited: '#440381',
  borderDark: '#282828',
  borderDarkest: '#000000',
  borderLight: '#656565',
  borderLighter: '#aaaaaa',
  borderLightest: '#d0d0d0',
  canvas: '#000000',
  canvasText: '#c0c0c0',
  headerBackground: '#000000',
  headerNotActiveBackground: '#7f7f7f',
  headerNotActiveText: '#535353',
  headerText: '#a7a7a7',
  material: '#535353',
  materialText: '#35FF69',
  materialTextDisabled: '#282828',
  materialTextDisabledShadow: '#a7a7a7',
  materialTextInvert: '#ffffff',
  progress: '#000000',
  inputBackground: '#ffffff',
  inputBackgroundDisabled: '#656565',
};

export const matrix = createTheme(contract, {
  ...theme,
  colors,
  shadows: generateShadows(colors),
});
