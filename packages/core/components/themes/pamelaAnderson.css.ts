import { createTheme } from '@vanilla-extract/css';
import { theme, generateShadows } from './baseTheme.css';
import { contract } from './contract.css';

const colors = {
  anchor: '#1034a6',
  anchorVisited: '#440381',
  borderDark: '#7e0541',
  borderDarkest: '#000000',
  borderLight: '#ff308f',
  borderLighter: '#ff8dc1',
  borderLightest: '#fec0dc',
  canvas: '#000000',
  canvasText: '#F5CCE8',
  headerBackground: '#FF8CC6',
  headerNotActiveBackground: '#95818D',
  headerNotActiveText: '#ff0080',
  headerText: '#000000',
  material: '#ff0080',
  materialText: '#000000',
  materialTextDisabled: '#7e0541',
  materialTextDisabledShadow: '#ff7ebf',
  materialTextInvert: '#F1E4E8',
  progress: '#004FFF',
  inputBackground: '#fec0dc',
  inputBackgroundDisabled: '#ff308f',
};

export const pamelaAnderson = createTheme(contract, {
  ...theme,
  colors,
  shadows: generateShadows(colors),
});
