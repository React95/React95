import { style, globalStyle } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { contract } from '../ThemeProvider/themes/contract.css';

import rightcaret from '../GlobalStyle/imgs/rightcaret.svg';

export const listItem = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  margin: contract.space[0],
  paddingBlock: contract.space[2],
  paddingInline: contract.space[6],
  color: contract.colors.materialText,
  selectors: {
    '&:hover': {
      backgroundColor: contract.colors.headerBackground,
      color: contract.colors.materialTextInvert,
    },
  },
});

globalStyle(`${listItem} svg`, { marginRight: contract.space[10] });
globalStyle(`${listItem} ul`, {
  display: 'none',
  position: 'absolute',
  top: calc.negate(contract.space[2]),
  left: '97%',
  color: contract.colors.materialText,
  zIndex: contract.zIndices.taskbar,
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
