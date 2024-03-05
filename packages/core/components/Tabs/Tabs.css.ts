import { globalStyle, style } from '@vanilla-extract/css';
import { contract } from '../themes/contract.css';
import { recipe } from '@vanilla-extract/recipes';
import { calc } from '@vanilla-extract/css-utils';

export const navbar = style({
  display: 'flex',
  padding: '0',
  margin: '0',
  border: 'none',
  zIndex: 1,
});

export const navContainer = style({
  padding: contract.space[12],
  boxShadow: contract.shadows.out,
  backgroundColor: contract.colors.material,
});

export const tab = recipe({
  base: {
    listStyle: 'none',
    userSelect: 'none',
    paddingBlock: contract.space[3],
    paddingInline: contract.space[6],
    backgroundColor: contract.colors.material,
    marginRight: contract.space[2],
    marginLeft: contract.space[2],
    boxShadow: `inset 0 1px 0 0 ${contract.colors.borderLightest},
      -2px 1px 0 -1px ${contract.colors.material},
      -3px 1px 0 -1px ${contract.colors.borderLightest},
      -2px 0 0 -1px ${contract.colors.borderLightest},
      2px 1px 0 -1px ${contract.colors.borderDark},
      2px 0 0 -1px ${contract.colors.borderDarkest},
      3px 1px 0 -1px ${contract.colors.borderDarkest}`,
    selectors: {
      '&:first-child': {
        marginLeft: contract.space[4],
      },
    },
  },
  variants: {
    active: {
      true: {
        marginTop: calc.negate(contract.space[2]),
        marginLeft: calc.negate(contract.space[2]),
        marginBottom: contract.space[1],
        '&:first-child': { marginLeft: contract.space[2] },
        boxShadow: `inset 0 1px 0 0 ${contract.colors.borderLightest},
        -2px 1px 0 -1px ${contract.colors.material},
        -0.5px 3px 0 0.5px ${contract.colors.material},
        -2px 2px 0 0 ${contract.colors.borderLightest},
        -2px 0 0 -1px ${contract.colors.borderLightest},
        1px 2px 0 0 ${contract.colors.borderDark},
        2px 0 0 -1px ${contract.colors.borderDarkest},
        2px 2px 0 0 ${contract.colors.borderDarkest}`,
      },
    },
  },
});

globalStyle(`${tab.classNames.variants.active.true} + li`, {
  marginLeft: 0,
  boxShadow: `inset 0 1px 0 0 ${contract.colors.borderLightest},
    2px 1px 0 -1px ${contract.colors.borderDark},
    2px 0 0 -1px ${contract.colors.borderDarkest},
    3px 1px 0 -1px ${contract.colors.borderDarkest}`,
});
