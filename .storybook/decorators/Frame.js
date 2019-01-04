import React from 'react';

import { createGlobalStyle } from 'styled-components';

import woff2 from '../../assets/font/px_sans_nouveaux.woff2';
import woff from '../../assets/font/px_sans_nouveaux.woff';
import ttf from '../../assets/font/px_sans_nouveaux.ttf';
import svg from '../../assets/font/px_sans_nouveaux.svg';
import eot from '../../assets/font/px_sans_nouveaux.eot';

import pattern from '../../assets/pattern/dropdown.png';
import upcaret from '../../assets/pattern/upcaret.svg';
import downcaret from '../../assets/pattern/downcaret.svg';
import leftcaret from '../../assets/pattern/leftcaret.svg';
import rightcaret from '../../assets/pattern/rightcaret.svg';

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
import grab from '../../assets/cursors/Hand.png';
import grabbing from '../../assets/cursors/Handsqueezed.png';
import colResize from '../../assets/cursors/ColRezise.png';
import rowResize from '../../assets/cursors/RowResize.png';
import nResize from '../../assets/cursors/UpArrow.png';
import eResize from '../../assets/cursors/RightArrow.png';
import sResize from '../../assets/cursors/DownArrow.png';
import wResize from '../../assets/cursors/LeftArrow.png';
import nsResize from '../../assets/cursors/UpDownArrow.png';
import ewResize from '../../assets/cursors/LeftRight.png';
import neResize from '../../assets/cursors/UpRightArrow.png';
import nwResize from '../../assets/cursors/UpLeftArrow.png';
import seResize from '../../assets/cursors/DownRightArrow.png';
import swResize from '../../assets/cursors/DownLeftArrow.png';
import neswResize from '../../assets/cursors/AngleUpRight.png';
import nwseResize from '../../assets/cursors/AngleUpLeft.png';
import zoomIn from '../../assets/cursors/ZoomIn.png';
import zoomOut from '../../assets/cursors/ZoomOut.png';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Px Sans Nouveaux';
    src: url('${eot}');
    src: url('${woff2}') format('woff2'),
         url('${woff}') format('woff'),
         url('${ttf}') format('truetype'),
         url('${svg}#px_sans_nouveaux') format('svg'),
         url('${eot}.eot?#iefix') format('embedded-opentype');
    font-weight: normal;
    font-style: normal;
  }

  body {
    background-color: #5aa;
  }

  * {
    font-family: 'Px Sans Nouveaux';
    font-size: 10px;
    box-sizing: border-box;
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
    background-position: center center;
  }

  ::-webkit-scrollbar-button:end:decrement,
  ::-webkit-scrollbar-button:start:increment {
    display: none;
  }

  ::-webkit-scrollbar-button:vertical {
    background-size: 6px 3px;
  }

  ::-webkit-scrollbar-button:horizontal {
    background-size: 3px 6px;
  }

  ::-webkit-scrollbar-button:vertical:start:decrement {
    background-image: url('${upcaret}');
  }

  ::-webkit-scrollbar-button:vertical:end:increment {
    background-image: url('${downcaret}');
  }

  ::-webkit-scrollbar-button:horizontal:start:decrement {
    background-image: url('${leftcaret}');
  }

  ::-webkit-scrollbar-button:horizontal:end:increment {
    background-image: url('${rightcaret}');
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

  html, .auto, *   { cursor: url('${auto}'), auto; }
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
  .grab            { cursor: url('${grab}'), grab; }
  .grabbing        { cursor: url('${grabbing}'), grabbing; }
  .col-resize      { cursor: url('${colResize}'), col-resize; }
  .row-resize      { cursor: url('${rowResize}'), row-resize; }
  .n-resize        { cursor: url('${nResize}'), n-resize; }
  .e-resize        { cursor: url('${eResize}'), e-resize; }
  .s-resize        { cursor: url('${sResize}'), s-resize; }
  .w-resize        { cursor: url('${wResize}'), w-resize; }
  .ns-resize       { cursor: url('${nsResize}'), ns-resize; }
  .ew-resize       { cursor: url('${ewResize}'), ew-resize; }
  .ne-resize       { cursor: url('${neResize}'), ne-resize; }
  .nw-resize       { cursor: url('${nwResize}'), nw-resize; }
  .se-resize       { cursor: url('${seResize}'), se-resize; }
  .sw-resize       { cursor: url('${swResize}'), sw-resize; }
  .nesw-resize     { cursor: url('${neswResize}'), nesw-resize; }
  .nwse-resize     { cursor: url('${nwseResize}'), nwse-resize; }
  .zoom-in         { cursor: url('${zoomIn}'), zoom-in; }
  .zoom-out        { cursor: url('${zoomOut}'), zoom-out; }
`;

const Frame = storyFn => (
  <React.Fragment>
    <GlobalStyle />
    {storyFn()}
  </React.Fragment>
);

export default Frame;
