import { globalStyle, style } from '@vanilla-extract/css';
import { contract } from '../themes/contract.css';
import { calc } from '@vanilla-extract/css-utils';
import { recipe } from '@vanilla-extract/recipes';

const base = { listStyle: 'none', margin: '0', padding: '0' };

export const tree = style(base);

globalStyle(`${tree} menu`, { ...base, marginLeft: contract.space[6] });

export const node = style({
  marginLeft: contract.space[12],
  borderLeftWidth: 'thin',
  borderLeftStyle: 'dotted',
  borderLeftColor: contract.colors.borderDarkest,
  position: 'relative',
  selectors: {
    '&:last-child': {
      borderLeftColor: 'transparent',
    },
    '&:before': {
      position: 'absolute',
      left: 0,
      width: contract.space[16],
      height: contract.space[10],
      verticalAlign: 'top',
      borderBottomWidth: 'thin',
      borderBottomStyle: 'dotted',
      borderBottomColor: contract.colors.borderDarkest,
      content: '""',
      display: 'inline-block',
    },
    '&:last-child:before': {
      borderLeftWidth: 'thin',
      borderLeftStyle: 'dotted',
      borderLeftColor: contract.colors.borderDarkest,
      left: calc.negate(contract.space[1]),
      width: contract.space[15],
    },
  },
});

export const nodeRoot = style({
  padding: 0,
  margin: 0,
  borderLeft: 'unset',
  selectors: {
    '&:before': {
      content: 'unset',
    },
  },
});

export const nodeContent = style({
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
});

export const label = style({
  outline: 'none',
  padding: contract.space[1],
  selectors: {
    '&:focus': {
      borderWidth: contract.space[1],
      borderStyle: 'dotted',
      padding: contract.space[0],
    },
  },
});

export const folderStatus = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: contract.space[10],
  height: contract.space[10],
  borderWidth: contract.space[1],
  borderStyle: 'solid',
  borderColor: contract.colors.borderDarkest,
  backgroundColor: contract.colors.inputBackground,
  fontSize: '11px',
  marginLeft: calc.negate(contract.space[5]),
  userSelect: 'none',
});

export const iconContainer = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: contract.space[20],
    minHeight: contract.space[20],
    marginRight: contract.space[2],
  },
  variants: {
    hasChildren: {
      true: {
        marginLeft: contract.space[2],
      },
      false: {
        marginLeft: contract.space[6],
      },
    },
  },
});
