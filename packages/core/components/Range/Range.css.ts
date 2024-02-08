import { style } from '@vanilla-extract/css';
import { contract } from '../ThemeProvider/themes/contract.css';
import { calc } from '@vanilla-extract/css-utils';

const track = {
  width: '100%',
  height: contract.space[4],
  backgroundColor: contract.colors.borderDarkest,
  cursor: 'pointer',
  borderStyle: 'solid',
  borderTopWidth: contract.space[1],
  borderTopColor: contract.colors.borderLight,
  borderRightWidth: contract.space[2],
  borderRightColor: contract.colors.borderLightest,
  borderBottomWidth: contract.space[1],
  borderBottomColor: contract.colors.borderLighter,
  borderLeftWidth: contract.space[2],
  borderLeftColor: contract.colors.borderLightest,
  boxShadow: `0px 1px 0px 0px ${contract.colors.borderLightest}`,
} as const;

const thumb = {
  width: contract.space[12],
  height: contract.space[20],
  backgroundColor: contract.colors.material,
  cursor: 'pointer',
  marginTop: calc.negate(contract.space[8]),
  borderStyle: 'solid',
  borderTopWidth: contract.space[1],
  borderTopColor: contract.colors.borderLightest,
  borderRightWidth: contract.space[1],
  borderRightColor: contract.colors.borderDarkest,
  borderBottomWidth: contract.space[1],
  borderBottomColor: contract.colors.borderDarkest,
  borderLeftWidth: contract.space[1],
  borderLeftColor: contract.colors.borderLightest,
  boxShadow: `inset 0px -1px 0px ${contract.colors.borderDark},
  inset -1px 0px 0px ${contract.colors.borderDark},
  inset 0px 1px 0px ${contract.colors.borderLighter},
  inset 1px 0px 0px ${contract.colors.borderLighter}`,
  appearance: 'none',
} as const;

export const range = style({
  appearance: 'none',
  width: '100%',
  selectors: {
    '&::hover,&::focus,&::active': { outline: 'none' },
    '&::-webkit-slider-runnable-track': track,
    '&::-moz-range-track': track,
    '&::-webkit-slider-thumb': thumb,
    '&::-moz-range-thumb': thumb,
    '&:focus::-webkit-slider-runnable-track': {
      backgroundColor: contract.colors.borderDarkest,
    },
  },
});
