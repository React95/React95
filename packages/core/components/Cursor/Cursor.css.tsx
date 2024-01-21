import NwseResize from './cursors/AngleUpLeft.png';
import NeswResize from './cursors/AngleUpRight.png';
import Progress from './cursors/AppStarting.png';
import Auto from './cursors/Arrow.png';
import NoDrop from './cursors/Circle.png';
import ColResize from './cursors/ColRezise.png';
import Copy from './cursors/Copy.png';
import Crosshair from './cursors/Cross.png';
import SResize from './cursors/DownArrow.png';
import SwResize from './cursors/DownLeftArrow.png';
import SeResize from './cursors/DownRightArrow.png';
import Grab from './cursors/Hand.png';
import Pointer from './cursors/HandPointer.png';
import Grabbing from './cursors/Handsqueezed.png';
import Help from './cursors/Help.png';
import WResize from './cursors/LeftArrow.png';
import EwResize from './cursors/LeftRight.png';
import Alias from './cursors/Link.png';
import Move from './cursors/Move.png';
import NotAllowed from './cursors/NO.png';
import EResize from './cursors/RightArrow.png';
import RowResize from './cursors/RowResize.png';
import Text from './cursors/Text.png';
import NResize from './cursors/UpArrow.png';
import NsResize from './cursors/UpDownArrow.png';
import NwResize from './cursors/UpLeftArrow.png';
import NeResize from './cursors/UpRightArrow.png';
import VerticalText from './cursors/VText.png';
import Wait from './cursors/Wait.png';
import ZoomIn from './cursors/ZoomIn.png';
import ZoomOut from './cursors/ZoomOut.png';
import { styleVariants } from '@vanilla-extract/css';

export const Cursor = styleVariants({
  Auto: {
    cursor: `url(${Auto}), auto`,
  },
  Text: {
    cursor: `url(${Text}), text`,
  },
  VerticalText: {
    cursor: `url(${VerticalText}), vertical-text`,
  },
  Help: {
    cursor: `url(${Help}), help`,
  },
  Crosshair: {
    cursor: `url(${Crosshair}), crosshair`,
  },
  Pointer: {
    cursor: `url(${Pointer}), pointer`,
  },
  Progress: {
    cursor: `url(${Progress}), progress`,
  },
  Wait: {
    cursor: `url(${Wait}), wait`,
  },
  Alias: {
    cursor: `url(${Alias}), alias`,
  },
  Copy: {
    cursor: `url(${Copy}), copy`,
  },
  Move: {
    cursor: `url(${Move}), move`,
  },
  None: {
    cursor: `none`,
  },
  NoDrop: {
    cursor: `url(${NoDrop}), no-drop`,
  },
  NotAllowed: {
    cursor: `url(${NotAllowed}), not-allowed`,
  },
  Grab: {
    cursor: `url(${Grab}), grab`,
  },
  Grabbing: {
    cursor: `url(${Grabbing}), grabbing`,
  },
  ColResize: {
    cursor: `url(${ColResize}), col-resize`,
  },
  RowResize: {
    cursor: `url(${RowResize}), row-resize`,
  },
  NResize: {
    cursor: `url(${NResize}), n-resize`,
  },
  EResize: {
    cursor: `url(${EResize}), e-resize`,
  },
  SResize: {
    cursor: `url(${SResize}), s-resize`,
  },
  WResize: {
    cursor: `url(${WResize}), w-resize`,
  },
  NsResize: {
    cursor: `url(${NsResize}), ns-resize`,
  },
  EwResize: {
    cursor: `url(${EwResize}), ew-resize`,
  },
  NeResize: {
    cursor: `url(${NeResize}), ne-resize`,
  },
  NwResize: {
    cursor: `url(${NwResize}), nw-resize`,
  },
  SeResize: {
    cursor: `url(${SeResize}), se-resize`,
  },
  SwResize: {
    cursor: `url(${SwResize}), sw-resize`,
  },
  NeswResize: {
    cursor: `url(${NeswResize}), nesw-resize`,
  },
  NwseResize: {
    cursor: `url(${NwseResize}), nwse-resize`,
  },
  ZoomIn: {
    cursor: `url(${ZoomIn}), zoom-in`,
  },
  ZoomOut: {
    cursor: `url(${ZoomOut}), zoom-out`,
  },
});
