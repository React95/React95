import { globalStyle, style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { recipe } from '@vanilla-extract/recipes';

import { R95VideoNumbers } from '../shared/font-names';
import { contract } from '../themes/contract.css';

export const videoTag = recipe({
  base: {
    width: '100%',
    padding: contract.space[2],
  },
  variants: {
    visible: {
      true: {
        display: 'block',
      },
      false: {
        display: 'none',
      },
    },
  },
});

export const controls = style({
  display: 'flex',
  alignItems: 'center',
  paddingTop: contract.space[2],
  paddingBottom: contract.space[2],
});

export const countDownContainer = style({
  display: 'flex',
  padding: contract.space[6],
  marginBottom: contract.space[4],
  boxShadow: contract.shadows.in,
  backgroundColor: contract.colors.canvas,
  height: '50px',
  color: contract.colors.canvasText,
});

export const videoFont = style({
  fontFamily: R95VideoNumbers,
  textTransform: 'uppercase',
});

export const currentTime = style({
  marginTop: 'auto',
  fontSize: 22,
});

export const elapsedTime = style({
  height: contract.space[12],
});

export const divider = style({
  display: 'block',
  height: contract.space[1],
  borderTopStyle: 'solid',
  borderTopWidth: contract.space[1],
  borderTopColor: contract.colors.borderDark,
  borderBottomWidth: contract.space[1],
  borderBottomStyle: 'solid',
  borderBottomColor: contract.colors.borderLightest,
  marginBottom: contract.space[2],
});

export const controlBtn = style({
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: contract.space[20],
  height: contract.space[20],
  padding: contract.space[7],
  selectors: {
    '&:active, &:focus': {
      width: contract.space[20],
      height: contract.space[20],
      padding: contract.space[7],
    },
    '&:disabled': {
      padding: contract.space[4],
    },
  },
});

globalStyle(`${controlBtn} svg`, {
  fill: contract.colors.materialText,
});

globalStyle(`${controlBtn}:disabled svg`, {
  fill: contract.colors.borderDark,
  borderBottomWidth: contract.space[1],
  borderBottomStyle: 'solid',
  borderBottomColor: contract.colors.borderLightest,
  borderRightWidth: contract.space[1],
  borderRightStyle: 'solid',
  borderRightColor: contract.colors.borderLightest,
});

export const range = style({
  selectors: {
    '&::-webkit-slider-thumb': {
      height: contract.space[18],
      marginTop: calc.negate(contract.space[7]),
      width: contract.space[10],
    },
    "&[value='0']::-webkit-slider-thumb": {
      marginLeft: calc.negate(contract.space[2]),
    },
  },
});
