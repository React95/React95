import { globalStyle, globalFontFace } from '@vanilla-extract/css';
import { contract } from '../ThemeProvider/themes/contract.css';

import { scrollbars } from './Scrollbar';

import ttf from './font/MS-Sans-Serif-8pt.ttf';
import ttfBold from './font/MS-Sans-Serif-8pt-bold.ttf';
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

/*
`
  // scrollbar
  ${scrollbars}
`;
*/
