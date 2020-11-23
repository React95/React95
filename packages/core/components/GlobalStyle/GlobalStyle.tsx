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

  html, .auto, *       { cursor: ${Cursor('auto')}}
  .default             { cursor: ${Cursor('auto')}}
  .none                { cursor: ${Cursor('none')}}
  .help                { cursor: ${Cursor('help')}}
  .pointer, :any-link  { cursor: ${Cursor('pointer')}}
  .progress            { cursor: ${Cursor('progress')}}
  .wait                { cursor: ${Cursor('wait')}}
  .crosshair           { cursor: ${Cursor('crosshair')}}
  .text                { cursor: ${Cursor('text')}}
  .vertical-text       { cursor: ${Cursor('vertical-text')}}
  .alias               { cursor: ${Cursor('alias')}}
  .copy                { cursor: ${Cursor('copy')}}
  .move                { cursor: ${Cursor('move')}}
  .no-drop             { cursor: ${Cursor('no-drop')}}
  .not-allowed         { cursor: ${Cursor('not-allowed')}}
  .grab                { cursor: ${Cursor('grab')}}
  .grabbing            { cursor: ${Cursor('grabbing')}}
  .col-resize          { cursor: ${Cursor('col-resize')}}
  .row-resize          { cursor: ${Cursor('row-resize')}}
  .n-resize            { cursor: ${Cursor('n-resize')}}
  .e-resize            { cursor: ${Cursor('e-resize')}}
  .s-resize            { cursor: ${Cursor('s-resize')}}
  .w-resize            { cursor: ${Cursor('w-resize')}}
  .ns-resize           { cursor: ${Cursor('ns-resize')}}
  .ew-resize           { cursor: ${Cursor('ew-resize')}}
  .ne-resize           { cursor: ${Cursor('ne-resize')}}
  .nw-resize           { cursor: ${Cursor('nw-resize')}}
  .se-resize           { cursor: ${Cursor('se-resize')}}
  .sw-resize           { cursor: ${Cursor('sw-resize')}}
  .nesw-resize         { cursor: ${Cursor('nesw-resize')}}
  .nwse-resize         { cursor: ${Cursor('nwse-resize')}}
  .zoom-in             { cursor: ${Cursor('zoom-in')}}
  .zoom-out            { cursor: ${Cursor('zoom-out')}}
`;

export default GlobalStyle;
