import { globalStyle, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { contract } from '../themes/contract.css';
import { calc } from '@vanilla-extract/css-utils';
import { inLayer, composed } from '../shared/layers.css';

export const truncate = style(
  inLayer(composed, {
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitLineClamp: '1',
    WebkitBoxOrient: 'vertical',
    textAlign: 'left',
  }),
);

export const tooltip = style(inLayer(composed, {}));

globalStyle(
  `${tooltip} div:first-child`,
  inLayer(composed, {
    right: 0,
  }),
);

export const windowsButton = recipe({
  base: inLayer(composed, {
    display: 'inline-flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: contract.colors.material,
    paddingBlock: contract.space[2],
    paddingInline: contract.space[3],
    marginRight: contract.space[2],
    maxWidth: '150px',
    border: 'none',
    outline: 'none',
    color: contract.colors.materialText,
  }),
  variants: {
    small: {
      true: inLayer(composed, {
        paddingInline: contract.space[5],
      }),
      false: inLayer(composed, {
        width: '100%',
      }),
    },
    active: {
      true: inLayer(composed, {
        boxShadow: contract.shadows.in,
      }),
      false: inLayer(composed, {
        boxShadow: contract.shadows.out,
      }),
    },
  },
  compoundVariants: [
    {
      variants: {
        active: true,
        small: true,
      },
      style: inLayer(composed, {
        paddingTop: contract.space[4],
        paddingBottom: contract.space[0],
        outline: `${contract.space[1]} dotted ${contract.colors.borderDarkest}`,
        outlineOffset: calc.negate(contract.space[4]),
      }),
    },
    {
      variants: {
        active: true,
        small: false,
      },
      style: inLayer(composed, {
        backgroundColor: contract.colors.borderLighter,
      }),
    },
  ],
});

export const icon = style(inLayer(composed, {}));

globalStyle(
  `${icon} svg`,
  inLayer(composed, {
    marginTop: contract.space[4],
    marginRight: contract.space[4],
    minWidth: contract.space[2],
    width: contract.space[20],
    height: contract.space[20],
    shapeRendering: 'auto',
  }),
);
