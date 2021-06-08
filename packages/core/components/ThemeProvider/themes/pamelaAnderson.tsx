import { DefaultTheme, IColors } from 'styled-components';
import BaseTheme, { generateShadows } from './baseTheme';

const colors: IColors = {
  anchor: '#1034a6',
  anchorVisited: '#440381',
  borderDark: '#7e0541',
  borderDarkest: '#000000',
  borderLight: '#ff308f',
  borderLighter: '#ff8dc1',
  borderLightest: '#fec0dc',
  canvas: '#000000',
  canvasText: '#F5CCE8',
  canvasTextDisabled: '#7e0541',
  canvasTextDisabledShadow: '#ff7ebf',
  canvasTextInvert: '#F1E4E8',
  headerBackground: '#FF8CC6',
  headerNotActiveBackground: '#95818D',
  headerNotActiveText: '#ff0080',
  headerText: '#000000',
  material: '#ff0080',
  materialDark: '#95818D',
  materialText: '#000000',
  materialTextDisabled: '#7e0541',
  materialTextDisabledShadow: '#ff7ebf',
  materialTextInvert: '#F1E4E8',
  progress: '#004FFF',
  inputBackground: '#fec0dc',
  inputBackgroundDisabled: '#ff308f',
  tooltip: '#fefbcc',
};

const pamelaAnderson: DefaultTheme = {
  ...BaseTheme,
  colors,
  shadows: generateShadows(colors),
};

export default pamelaAnderson;
