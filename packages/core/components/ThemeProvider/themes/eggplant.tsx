import { DefaultTheme, IColors } from 'styled-components';
import BaseTheme, { generateShadows } from './baseTheme';

const colors: IColors = {
  anchor: '#1034a6',
  anchorVisited: '#440381',
  borderDark: '#526d67',
  borderDarkest: '#050608',
  borderLight: '#a2c7c0',
  borderLighter: '#cbe0dc',
  borderLightest: '#e2edeb',
  canvas: '#000000',
  canvasText: '#050608',
  canvasTextDisabled: '#526d67',
  canvasTextDisabledShadow: '#cee8e3',
  canvasTextInvert: '#cee8e3',
  headerBackground: '#4b8178',
  headerNotActiveBackground: '#89b0a8',
  headerNotActiveText: '#4b8178',
  headerText: '#ffffff',
  material: '#89b0a8',
  materialDark: '#9a9e9c',
  materialText: '#050608',
  materialTextDisabled: '#526d67',
  materialTextDisabledShadow: '#cee8e3',
  materialTextInvert: '#ffffff',
  progress: '#4b8178',
  inputBackground: '#ffffff',
  inputBackgroundDisabled: '#a2c7c0',
  tooltip: '#fefbcc',
};

const eggplant: DefaultTheme = {
  ...BaseTheme,
  colors,
  shadows: generateShadows(colors),
};

export default eggplant;
