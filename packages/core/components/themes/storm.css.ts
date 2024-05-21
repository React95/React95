import { createGlobalTheme } from '@vanilla-extract/css';
import { theme, generateShadows } from './baseTheme';
import { contract } from './contract.css';

const colors = {
  anchor: '#1034a6',
  anchorVisited: '#440381',
  borderDark: '#848584',
  borderDarkest: '#0a0a0a',
  borderLight: '#dfdfdf',
  borderLighter: '#ededed',
  borderLightest: '#f5f5f5',
  canvas: '#0a0a0a',
  canvasText: '#ffffff',
  headerBackground: 'linear-gradient(to right, #8c0184, #0089ad)',
  headerNotActiveBackground: 'linear-gradient(to right, #7f7f81, transparent)',
  headerNotActiveText: '#ced0cf',
  headerText: '#ffffff',
  material: '#c6c6c6',
  materialText: '#0a0a0a',
  materialTextDisabled: '#848584',
  materialTextDisabledShadow: '#fefefe',
  materialTextInvert: '#fefefe',
  progress: '#8c0184',
  inputBackground: '#ffffff',
  inputBackgroundDisabled: '#dfdfdf',
};

createGlobalTheme(':root', contract, {
  ...theme,
  colors,
  shadows: generateShadows(colors),
});
