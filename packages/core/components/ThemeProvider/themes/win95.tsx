import { DefaultTheme, IColors } from 'styled-components'
import BaseTheme, { generateShadows } from './baseTheme'

const colors : IColors = {anchor: '#1034a6',
  anchorVisited: '#440381',
  borderDark: '#848584',
  borderDarkest: '#0a0a0a',
  borderLight: '#dfdfdf',
  borderLightest: '#fefefe',
  canvas: '#ffffff',
  canvasText: '#0a0a0a',
  canvasTextDisabled: '#848584',
  canvasTextDisabledShadow: '#fefefe',
  canvasTextInvert: '#fefefe',
  headerBackground: '#060084',
  headerNotActiveBackground: '#7f787f',
  headerNotActiveText: '#c6c6c6',
  headerText: '#fefefe',
  material: '#c6c6c6',
  materialDark: '#9a9e9c',
  materialText: '#0a0a0a',
  materialTextDisabled: '#848584',
  materialTextDisabledShadow: '#fefefe',
  materialTextInvert: '#fefefe',
  progress: '#060084',
  tooltip: '#fefbcc'
};

const theme: DefaultTheme = {
  ...BaseTheme,
  colors,
  shadows: generateShadows(colors)
};

export default theme;