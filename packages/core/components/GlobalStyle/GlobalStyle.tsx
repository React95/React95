import { createGlobalStyle } from '@xstyled/styled-components';

import eot from './font/MS-Sans-Serif.eot';
import ttf from './font/MS-Sans-Serif.ttf';
import woff from './font/MS-Sans-Serif.woff';
import woff2 from './font/MS-Sans-Serif.woff2';
import videoeot from './font/React95Video-Numbers.eot';
import videottf from './font/React95Video-Numbers.ttf';
import videowoff from './font/React95Video-Numbers.woff';
import videowoff2 from './font/React95Video-Numbers.woff2';

import Cursor from '../Cursor/Cursor';
import { scrollbars } from './Scrollbar';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'MS Sans Serif';
    src: url('${eot}');
    src: url('${woff2}') format('woff2'),
         url('${woff}') format('woff'),
         url('${ttf}') format('truetype'),
         url('${eot}?#iefix') format('embedded-opentype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'React95Video-Numbers';
    src: url('${videoeot}');
    src: url('${videowoff2}') format('woff2'),
         url('${videowoff}') format('woff'),
         url('${videottf}') format('truetype'),
         url('${videoeot}?#iefix') format('embedded-opentype');
    font-weight: normal;
    font-style: normal;
  }

  body {
    background-color: #5aa;
    margin: 0;
    padding: 0;
    font-size: 12px;
    color: materialText;
  }

  a {
    color: anchor;
  }

  a:visited {
    color: anchorVisited;
  }

  * {
    font-family: 'MS Sans Serif';
    box-sizing: border-box;
  }

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

export default GlobalStyle;
