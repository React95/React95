import { globalStyle, globalFontFace } from '@vanilla-extract/css';
import { contract } from '../ThemeProvider/themes/contract.css';

import Cursor from '../Cursor/Cursor';
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

  .default             { ${Cursor.Auto} }
  .none                { ${Cursor.None} }
  .help                { ${Cursor.Help} }
  .pointer, :any-link  { ${Cursor.Pointer} }
  .progress            { ${Cursor.Progress} }
  .wait                { ${Cursor.Wait} }
  .crosshair           { ${Cursor.Crosshair} }
  .text                { ${Cursor.Text} }
  .vertical-text       { ${Cursor.VerticalText} }
  .alias               { ${Cursor.Alias} }
  .copy                { ${Cursor.Copy} }
  .move                { ${Cursor.Move} }
  .no-drop             { ${Cursor.NoDrop} }
  .not-allowed         { ${Cursor.NotAllowed} }
  .grab                { ${Cursor.Grab} }
  .grabbing            { ${Cursor.Grabbing} }
  .col-resize          { ${Cursor.ColResize} }
  .row-resize          { ${Cursor.RowResize} }
  .n-resize            { ${Cursor.NResize} }
  .e-resize            { ${Cursor.EResize} }
  .s-resize            { ${Cursor.SResize} }
  .w-resize            { ${Cursor.WResize} }
  .ns-resize           { ${Cursor.NsResize} }
  .ew-resize           { ${Cursor.EwResize} }
  .ne-resize           { ${Cursor.NeResize} }
  .nw-resize           { ${Cursor.NwResize} }
  .se-resize           { ${Cursor.SeResize} }
  .sw-resize           { ${Cursor.SwResize} }
  .nesw-resize         { ${Cursor.NeswResize} }
  .nwse-resize         { ${Cursor.NwseResize} }
  .zoom-in             { ${Cursor.ZoomIn} }
  .zoom-out            { ${Cursor.ZoomOut} }
`;
*/
