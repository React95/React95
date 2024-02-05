import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { contract } from '../ThemeProvider/themes/contract.css';

export const button = style({
  backgroundColor: contract.colors.material,
  paddingTop: contract.space[7],
  paddingInline: contract.space[20],
  paddingBottom: contract.space[5],
  border: 'none',
  color: contract.colors.materialText,

  fontSize: 12,

  boxShadow: `inset 1px 1px 0px 1px ${contract.colors.borderLightest},
    inset 0 0 0 1px ${contract.colors.borderDark},
    1px 1px 0 0px ${contract.colors.borderDarkest}`,

  ':disabled': {
    color: contract.colors.materialTextDisabled,
  },
  ':focus': {
    outline: `${contract.space[1]} dotted ${contract.colors.materialText}`,
    outlineOffset: calc.negate(contract.space[5]),

    boxShadow: `inset 1px 1px 0px 1px ${contract.colors.borderLightest},
      inset -0.5px -0.5px 0px 1px ${contract.colors.borderDark},
      1px 1px 0 1px ${contract.colors.borderDarkest}`,
  },
  ':active': {
    paddingTop: contract.space[8],
    paddingInline: contract.space[20],
    paddingBottom: contract.space[4],

    outline: `${contract.space[1]} dotted ${contract.colors.borderDarkest}`,
    outlineOffset: calc.negate(contract.space[5]),

    boxShadow: `inset 0 0 0 1px ${contract.colors.borderDark},
      0 0 0 1px ${contract.colors.borderDarkest}`,
  },
});
