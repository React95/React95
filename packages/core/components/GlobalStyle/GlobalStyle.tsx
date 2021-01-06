import { createGlobalStyle } from 'styled-components';
import { createScrollbars } from '../shared-style/Scrollbar';
import Cursor from '../shared-style/Cursor';

import woff2 from '../shared/assets/font/MS-Sans-Serif.woff2';
import woff from '../shared/assets/font/MS-Sans-Serif.woff';
import ttf from '../shared/assets/font/MS-Sans-Serif.ttf';
import eot from '../shared/assets/font/MS-Sans-Serif.eot';
import videowoff2 from '../shared/assets/font/React95Video-Numbers.woff2';
import videowoff from '../shared/assets/font/React95Video-Numbers.woff';
import videottf from '../shared/assets/font/React95Video-Numbers.ttf';
import videoeot from '../shared/assets/font/React95Video-Numbers.eot';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'MS Sans Serif';
    src: url('${eot}');
    src: url('${woff2}') format('woff2'),
         url('${woff}') format('woff'),
         url('${ttf}') format('truetype'),
         url('${eot}.eot?#iefix') format('embedded-opentype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'React95Video-Numbers';
    src: url('${videoeot}');
    src: url('${videowoff2}') format('woff2'),
         url('${videowoff}') format('woff'),
         url('${videottf}') format('truetype'),
         url('${videoeot}.eot?#iefix') format('embedded-opentype');
    font-weight: normal;
    font-style: normal;
  }

  body {
    background-color: #5aa;
    margin: 0;
    padding: 0;
    font-size: 12px;
  }

  * {
    font-family: 'MS Sans Serif';
    box-sizing: border-box;
  }

  // scrollbar
  ${createScrollbars()}

  html, .auto, *       { ${Cursor('auto')} }
  .default             { ${Cursor('auto')} }
  .none                { ${Cursor('none')} }
  .help                { ${Cursor('help')} }
  .pointer, :any-link  { ${Cursor('pointer')} }
  .progress            { ${Cursor('progress')} }
  .wait                { ${Cursor('wait')} }
  .crosshair           { ${Cursor('crosshair')} }
  .text                { ${Cursor('text')} }
  .vertical-text       { ${Cursor('vertical-text')} }
  .alias               { ${Cursor('alias')} }
  .copy                { ${Cursor('copy')} }
  .move                { ${Cursor('move')} }
  .no-drop             { ${Cursor('no-drop')} }
  .not-allowed         { ${Cursor('not-allowed')} }
  .grab                { ${Cursor('grab')} }
  .grabbing            { ${Cursor('grabbing')} }
  .col-resize          { ${Cursor('col-resize')} }
  .row-resize          { ${Cursor('row-resize')} }
  .n-resize            { ${Cursor('n-resize')} }
  .e-resize            { ${Cursor('e-resize')} }
  .s-resize            { ${Cursor('s-resize')} }
  .w-resize            { ${Cursor('w-resize')} }
  .ns-resize           { ${Cursor('ns-resize')} }
  .ew-resize           { ${Cursor('ew-resize')} }
  .ne-resize           { ${Cursor('ne-resize')} }
  .nw-resize           { ${Cursor('nw-resize')} }
  .se-resize           { ${Cursor('se-resize')} }
  .sw-resize           { ${Cursor('sw-resize')} }
  .nesw-resize         { ${Cursor('nesw-resize')} }
  .nwse-resize         { ${Cursor('nwse-resize')} }
  .zoom-in             { ${Cursor('zoom-in')} }
  .zoom-out            { ${Cursor('zoom-out')} }
`;

export default GlobalStyle;
