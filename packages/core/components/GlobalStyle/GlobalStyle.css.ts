import { globalFontFace, globalStyle } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { contract } from '../ThemeProvider/themes/contract.css';

import { createBorder, createTriangleSVG } from './utils';
import ttfBold from './font/MS-Sans-Serif-8pt-bold.ttf';
import ttf from './font/MS-Sans-Serif-8pt.ttf';
import videoeot from './font/React95Video-Numbers.eot';
import videottf from './font/React95Video-Numbers.ttf';
import videowoff from './font/React95Video-Numbers.woff';
import videowoff2 from './font/React95Video-Numbers.woff2';

const MSSansSerif = 'MS Sans Serif';
const R95VideoNumbers = 'React95Video-Numbers';

globalFontFace(MSSansSerif, {
  src: `url('${ttf}') format('truetype')`,
  fontStyle: 'normal',
  fontWeight: 'normal',
});

globalFontFace(MSSansSerif, {
  src: `url('${ttfBold}') format('truetype')`,
  fontStyle: 'bold',
  fontWeight: 'bold',
});

globalFontFace(R95VideoNumbers, {
  src: `url('${videowoff2}') format('woff2'),
  url('${videowoff}') format('woff'),
  url('${videottf}') format('truetype'),
  url('${videoeot}?#iefix') format('embedded-opentype')`,
  fontStyle: 'normal',
  fontWeight: 'normal',
});

globalStyle('*', {
  fontFamily: MSSansSerif,
});

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
});

globalStyle('html', {
  fontSize: '100%',
});

globalStyle('body', {
  backgroundColor: '#5aa',
  margin: 0,
  padding: 0,
  fontSize: 12,
  color: contract.colors.materialText,
});

globalStyle('a', {
  color: contract.colors.anchor,
});

globalStyle('a:visited', {
  color: contract.colors.anchorVisited,
});

/* Scrollbar */

const triangles = {
  horizontal: {
    decrement: createTriangleSVG(contract.colors.materialText, 90),
    increment: createTriangleSVG(contract.colors.materialText, 270),
  },
  vertical: {
    decrement: createTriangleSVG(contract.colors.materialText, 180),
    increment: createTriangleSVG(contract.colors.materialText, 0),
  },
};

globalStyle('::-webkit-scrollbar', {
  width: contract.space[17],
  height: contract.space[17],
});

globalStyle('::-webkit-scrollbar-track', {
  backgroundImage: [
    `linear-gradient(45deg, ${contract.colors.material} 25%, transparent 25%, transparent 75%, ${contract.colors.material} 75%)`,
    `linear-gradient(45deg, ${contract.colors.material} 25%, transparent 25%, transparent 75%, ${contract.colors.material} 75%)`,
  ].join(','),
  backgroundColor: contract.colors.borderLightest,
  backgroundSize: `${contract.space[4]} ${contract.space[4]}`,
  backgroundPosition: `0 0, ${contract.space[2]} ${contract.space[2]}`,
});

globalStyle('::-webkit-scrollbar-corner', {
  backgroundColor: contract.colors.material,
});

globalStyle(
  `::-webkit-scrollbar-button:horizontal:increment:start,
  ::-webkit-scrollbar-button:horizontal:decrement:end,
  ::-webkit-scrollbar-button:vertical:increment:start,
  ::-webkit-scrollbar-button:vertical:decrement:end`,
  {
    display: 'none',
  },
);

globalStyle('::-webkit-scrollbar-button:horizontal:decrement', {
  backgroundImage: triangles.horizontal.decrement,
});

globalStyle('::-webkit-scrollbar-button:horizontal:increment', {
  backgroundImage: triangles.horizontal.increment,
});

globalStyle('::-webkit-scrollbar-button:vertical:decrement', {
  backgroundImage: triangles.vertical.decrement,
});

globalStyle('::-webkit-scrollbar-button:vertical:increment', {
  backgroundImage: triangles.vertical.increment,
});

const scrollbarBorderBase = createBorder({
  direction: 'extrude',
  outerBottomRight: contract.colors.borderDarkest,
  innerBottomRight: contract.colors.borderDark,
  outerTopLeft: contract.colors.borderLight,
  innerTopLeft: contract.colors.borderLightest,
});

globalStyle('::-webkit-scrollbar-thumb', {
  boxSizing: 'border-box',
  display: 'inline-block',
  background: contract.colors.material,
  color: contract.colors.materialText,
  ...scrollbarBorderBase,
});

globalStyle('::-webkit-scrollbar-button', {
  boxSizing: 'border-box',
  background: contract.colors.material,
  color: contract.colors.materialText,
  display: 'block',
  outlineOffset: calc.negate(contract.space[2]),
  height: contract.space[17],
  width: contract.space[17],
  backgroundRepeat: 'no-repeat',
  backgroundSize: '80%',
  backgroundPosition: '0 0',
  ...scrollbarBorderBase,
});

globalStyle(
  `::-webkit-scrollbar-button:active,
  ::-webkit-scrollbar-button:active`,
  {
    backgroundPosition: '0 1',
    ...scrollbarBorderBase,
  },
);
