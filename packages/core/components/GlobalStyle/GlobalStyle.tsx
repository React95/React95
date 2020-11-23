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
import auto from '../shared/assets/cursors/Arrow.png';

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

  html, .auto, *       { cursor: ${Cursor('auto')}}
  .default             { cursor: ${Cursor('auto')}}
  .none                { cursor: ${Cursor('none')}}
  .help                { cursor: ${Cursor('help')}}
  .pointer, :any-link  { cursor: ${Cursor('pointer')}}
  .progress            { cursor: ${Cursor('progress')}}
  .wait                { cursor: ${Cursor('wait')}}
  .crosshair           { cursor: ${Cursor('crosshair')}}
  .text                { cursor: ${Cursor('text')}}
  .vertical-text       { cursor: ${Cursor('verticalText')}}
  .alias               { cursor: ${Cursor('alias')}}
  .copy                { cursor: ${Cursor('copy')}}
  .move                { cursor: ${Cursor('move')}}
  .no-drop             { cursor: ${Cursor('noDrop')}}
  .not-allowed         { cursor: ${Cursor('notAllowed')}}
  .grab                { cursor: ${Cursor('grab')}}
  .grabbing            { cursor: ${Cursor('grabbing')}}
  .col-resize          { cursor: ${Cursor('colResize')}}
  .row-resize          { cursor: ${Cursor('rowResize')}}
  .n-resize            { cursor: ${Cursor('nResize')}}
  .e-resize            { cursor: ${Cursor('eResize')}}
  .s-resize            { cursor: ${Cursor('sResize')}}
  .w-resize            { cursor: ${Cursor('wResize')}}
  .ns-resize           { cursor: ${Cursor('nsResize')}}
  .ew-resize           { cursor: ${Cursor('ewResize')}}
  .ne-resize           { cursor: ${Cursor('neResize')}}
  .nw-resize           { cursor: ${Cursor('nwResize')}}
  .se-resize           { cursor: ${Cursor('seResize')}}
  .sw-resize           { cursor: ${Cursor('swResize')}}
  .nesw-resize         { cursor: ${Cursor('neswResize')}}
  .nwse-resize         { cursor: ${Cursor('nwseResize')}}
  .zoom-in             { cursor: ${Cursor('zoomIn')}}
  .zoom-out            { cursor: ${Cursor('zoomOut')}}
`;

export default GlobalStyle;
