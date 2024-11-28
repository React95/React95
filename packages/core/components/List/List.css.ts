import { style, globalStyle } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { contract } from '../themes/contract.css';

import rightcaret from '../shared/imgs/rightcaret.svg';

export const listItem = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  userSelect: 'none',
  margin: contract.space[0],
  paddingBlock: contract.space[2],
  paddingInline: contract.space[6],
  color: contract.colors.materialText,
  selectors: {
    '&:hover': {
      background: contract.colors.headerBackground,
      color: contract.colors.materialTextInvert,
    },
    '&:not(:has(svg))': {
      paddingInlineStart: '26px',
    },
    '&:has(ul):after': {
      position: 'absolute',
      width: contract.space[5],
      height: contract.space[8],
      right: contract.space[8],
      content: "''",
      backgroundColor: contract.colors.materialText,
      maskImage: `url('${rightcaret}')`,
      maskPosition: 'center center',
      maskSize: `${contract.space[5]} ${contract.space[8]}`,
      maskRepeat: 'no-repeat',
    },
    '&:has(ul):hover:after': {
      backgroundColor: contract.colors.materialTextInvert,
    },
  },
});

globalStyle(`${listItem} svg`, {
  marginRight: contract.space[10],
  minWidth: contract.space[16],
});

globalStyle(`${listItem} ul`, {
  display: 'none',
  position: 'absolute',
  top: calc.negate(contract.space[2]),
  left: '97%',
  color: contract.colors.materialText,
  zIndex: contract.zIndices.taskbar,
});

globalStyle(`${listItem}:has(ul):hover > ul`, {
  display: 'block',
});

export const divider = style({
  height: contract.space[1],
  borderTopStyle: 'solid',
  borderTopWidth: contract.space[1],
  borderTopColor: contract.colors.borderDark,
  borderBottomWidth: contract.space[1],
  borderBottomStyle: 'solid',
  borderBottomColor: contract.colors.borderLightest,
  width: '98%',
  marginLeft: contract.space[2],
});

export const list = style({
  backgroundColor: contract.colors.material,
  padding: contract.space[2],
  border: 'none',
  margin: 0,
  listStyle: 'none',
  boxShadow: contract.shadows.out,
});
