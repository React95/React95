import { createGlobalTheme } from '@vanilla-extract/css';
import { theme, generateShadows } from './baseTheme';
import { contract } from './contract.css';

const colors = {
  anchor: '#1034a6',
  anchorVisited: '#440381',
  borderDark: '#7b5f5b',
  borderDarkest: '#050608',
  borderLight: '#c3b1aa',
  borderLighter: '#ddd4d0',
  borderLightest: '#ece7e5',
  canvas: '#050608',
  canvasText: '#dad0c7',
  headerBackground: '#483f63',
  headerNotActiveBackground: '#7d5e58',
  headerNotActiveText: '#e8dad6',
  headerText: '#ffffff',
  material: '#ac978f',
  materialText: '#050608',
  materialTextDisabled: '#7b5f5b',
  materialTextDisabledShadow: '#e8dad6',
  materialTextInvert: '#ffffff',
  progress: '#483f63',
  inputBackground: '#ffffff',
  inputBackgroundDisabled: '#c3b1aa',
};

createGlobalTheme(':root', contract, {
  ...theme,
  colors,
  shadows: generateShadows(colors),
});
