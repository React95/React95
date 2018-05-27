import React from 'react';

import styled, { injectGlobal } from 'styled-components';

import woff2 from '../../assets/Pixelade.woff2';
import woff from '../../assets/Pixelade.woff';
import pattern from '../../assets/pattern/dropdown.png';

import auto from '../../assets/cursors/Arrow.png';
import text from '../../assets/cursors/Text.png';
import verticalText from '../../assets/cursors/VText.png';
import help from '../../assets/cursors/Help.png';
import crosshair from '../../assets/cursors/Cross.png';
import pointer from '../../assets/cursors/HandPointer.png';
import progress from '../../assets/cursors/AppStarting.png';
import wait from '../../assets/cursors/Wait.png';
import alias from '../../assets/cursors/Link.png';
import copy from '../../assets/cursors/Copy.png';
import move from '../../assets/cursors/Move.png';
import noDrop from '../../assets/cursors/Circle.png';
import notAllowed from '../../assets/cursors/NO.png';
// import allScroll from '../../assets/cursors/';
// import colResize from '../../assets/cursors/';
// import rowResize from '../../assets/cursors/';
// import nResize from '../../assets/cursors/';
// import eResize from '../../assets/cursors/';
// import sResize from '../../assets/cursors/';
// import wResize from '../../assets/cursors/';
// import nsResize from '../../assets/cursors/';
// import ewResize from '../../assets/cursors/';
// import neResize from '../../assets/cursors/';
// import nwResize from '../../assets/cursors/';
// import seResize from '../../assets/cursors/';
// import swResize from '../../assets/cursors/';
// import neswResize from '../../assets/cursors/';
// import nwseResize from '../../assets/cursors/';

injectGlobal`
  @font-face {
    font-family: 'Pixelade';
    src: url('${woff2}') format('woff2'),
        url('${woff}') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  body {
    background-color: #5aa;
  }

  * {
    font-family: 'Pixelade';
  }

  ::-webkit-scrollbar {
    width: 15px;
    height: 15px;
    background: url('${pattern}');
    background-size: 3px 3px;
  }

  ::-webkit-scrollbar-corner {
    background-color: transparent;
  }

  ::-webkit-scrollbar-button {
    width: 15px;
    height: 15px;
    background-color: #c3c7cb;
    box-shadow: inset 1px 1px 0px 1px #ffffff, inset 0 0 0 1px #868a8e;
    border-right: 2px solid black;
    border-bottom: 2px solid black;

    background-size: 10px 10px;
    background-repeat: no-repeat;
  }

  ::-webkit-scrollbar-button:end:decrement,
  ::-webkit-scrollbar-button:start:increment {
    display: none;
  }

  ::-webkit-scrollbar-button:vertical:start:decrement {
    background-image:
      linear-gradient(50deg, transparent 45%, #c3c7cb 45%),
      linear-gradient(-50deg, transparent 45%, #c3c7cb 45%),
      linear-gradient(to bottom, #ccc, #000);
    background-position: center -1px;
  }

  ::-webkit-scrollbar-button:vertical:end:increment {
    background-image:
      linear-gradient(130deg, transparent 45%, #c3c7cb 45%),
			linear-gradient(-130deg, transparent 45%, #c3c7cb 45%),
      linear-gradient(to top, #ccc, #000);
      background-position: center 6px;
  }

  ::-webkit-scrollbar-button:horizontal:start:decrement {
    background-image:
      linear-gradient(150deg, #c3c7cb 45%, transparent 45%),
			linear-gradient(-150deg, transparent 45%, #c3c7cb 45%),
      linear-gradient(to right, #ccc, #000);
      background-position: -1px 2px;
  }

  ::-webkit-scrollbar-button:horizontal:end:increment {
    background-image:
      linear-gradient(-30deg, #c3c7cb 45%, transparent 45%),
			linear-gradient(30deg, transparent 45%, #c3c7cb 45%),
      linear-gradient(to left, #ccc, #000);
      background-position: 4px 1px;
  }

  ::-webkit-resizer {
    /* TODO? */
  }

  ::-webkit-scrollbar-thumb {
    background-color: #c3c7cb;
    box-shadow: inset 1px 1px 0px 1px #ffffff, inset 0 0 0 1px #868a8e;
    border-right: 2px solid black;
    border-bottom: 2px solid black;
  }

  html, .auto      { cursor: url('${auto}'), auto; }
  .default         { cursor: url('${auto}'), default; }
  .none            { cursor: none; }
  .help            { cursor: url('${help}'), help; }
  .pointer         { cursor: url('${pointer}'), pointer; }
  .progress        { cursor: url('${progress}'), progress; }
  .wait            { cursor: url('${wait}'), wait; }
  .crosshair       { cursor: url('${crosshair}'), crosshair; }
  .text            { cursor: url('${text}'), text; }
  .vertical-text   { cursor: url('${verticalText}'), vertical-text; }
  .alias           { cursor: url('${alias}'), alias; }
  .copy            { cursor: url('${copy}'), copy; }
  .move            { cursor: url('${move}'), move; }
  .no-drop         { cursor: url('${noDrop}'), no-drop; }
  .not-allowed     { cursor: url('${notAllowed}'), not-allowed; }
  .all-scroll      { cursor: all-scroll; }
  .col-resize      { cursor: col-resize; }
  .row-resize      { cursor: row-resize; }
  .n-resize        { cursor: n-resize; }
  .e-resize        { cursor: e-resize; }
  .s-resize        { cursor: s-resize; }
  .w-resize        { cursor: w-resize; }
  .ns-resize       { cursor: ns-resize; }
  .ew-resize       { cursor: ew-resize; }
  .ne-resize       { cursor: ne-resize; }
  .nw-resize       { cursor: nw-resize; }
  .se-resize       { cursor: se-resize; }
  .sw-resize       { cursor: sw-resize; }
  .nesw-resize     { cursor: nesw-resize; }
  .nwse-resize     { cursor: nwse-resize; }
`;

const Frame = storyFn => <React.Fragment>{storyFn()}</React.Fragment>;

export default Frame;
