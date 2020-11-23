import { css } from 'styled-components';
import auto from '../shared/assets/cursors/Arrow.png';
import text from '../shared/assets/cursors/Text.png';
import verticalText from '../shared/assets/cursors/VText.png';
import help from '../shared/assets/cursors/Help.png';
import crosshair from '../shared/assets/cursors/Cross.png';
import pointer from '../shared/assets/cursors/HandPointer.png';
import progress from '../shared/assets/cursors/AppStarting.png';
import wait from '../shared/assets/cursors/Wait.png';
import alias from '../shared/assets/cursors/Link.png';
import copy from '../shared/assets/cursors/Copy.png';
import move from '../shared/assets/cursors/Move.png';
import noDrop from '../shared/assets/cursors/Circle.png';
import notAllowed from '../shared/assets/cursors/NO.png';
import grab from '../shared/assets/cursors/Hand.png';
import grabbing from '../shared/assets/cursors/Handsqueezed.png';
import colResize from '../shared/assets/cursors/ColRezise.png';
import rowResize from '../shared/assets/cursors/RowResize.png';
import nResize from '../shared/assets/cursors/UpArrow.png';
import eResize from '../shared/assets/cursors/RightArrow.png';
import sResize from '../shared/assets/cursors/DownArrow.png';
import wResize from '../shared/assets/cursors/LeftArrow.png';
import nsResize from '../shared/assets/cursors/UpDownArrow.png';
import ewResize from '../shared/assets/cursors/LeftRight.png';
import neResize from '../shared/assets/cursors/UpRightArrow.png';
import nwResize from '../shared/assets/cursors/UpLeftArrow.png';
import seResize from '../shared/assets/cursors/DownRightArrow.png';
import swResize from '../shared/assets/cursors/DownLeftArrow.png';
import neswResize from '../shared/assets/cursors/AngleUpRight.png';
import nwseResize from '../shared/assets/cursors/AngleUpLeft.png';
import zoomIn from '../shared/assets/cursors/ZoomIn.png';
import zoomOut from '../shared/assets/cursors/ZoomOut.png';

const cursors = {
  auto,
  text,
  verticalText,
  help,
  crosshair,
  pointer,
  progress,
  wait,
  alias,
  copy,
  move,
  noDrop,
  notAllowed,
  grab,
  grabbing,
  colResize,
  rowResize,
  nResize,
  eResize,
  sResize,
  wResize,
  nsResize,
  ewResize,
  neResize,
  nwResize,
  seResize,
  swResize,
  neswResize,
  nwseResize,
  zoomIn,
  zoomOut,
};

export type ICursor =
  | 'auto'
  | 'default'
  | 'none'
  | 'context-menu'
  | 'help'
  | 'pointer'
  | 'progress'
  | 'wait'
  | 'crosshair'
  | 'text'
  | 'vertical-text'
  | 'alias'
  | 'copy'
  | 'move'
  | 'no-drop'
  | 'not-allowed'
  | 'grab'
  | 'grabbing'
  | 'col-resize'
  | 'row-resize'
  | 'n-resize'
  | 'e-resize'
  | 's-resize'
  | 'w-resize'
  | 'ns-resize'
  | 'ew-resize'
  | 'ne-resize'
  | 'nw-resize'
  | 'se-resize'
  | 'sw-resize'
  | 'nesw-resize'
  | 'nwse-resize'
  | 'zoom-in'
  | 'zoom-out';

const toCamelCase = (string: string) =>
  string.replace(/-./g, x => x.toUpperCase()[1]);

const Cursor = (cursor: ICursor) => {
  const camelCaseCursor = toCamelCase(cursor);
  const selectedCursor =
    cursors[camelCaseCursor] != null
      ? cursors[camelCaseCursor]
      : cursors['auto'];
  const cursorCss = css`
    cursor: url('${selectedCursor}'), ${cursor};
  `;
  const noneCss = css`
    cursor: none;
  `;
  console.log(cursor, camelCaseCursor);
  return cursor == 'none' ? noneCss : cursorCss;
};

export default Cursor;
