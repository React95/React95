import { globalStyle, style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { recipe } from '@vanilla-extract/recipes';

import { R95VideoNumbers } from '../shared/font-names';
import { contract } from '../themes/contract.css';
import { inLayer, composed } from '../shared/layers.css';

export const videoTag = recipe({
  base: inLayer(composed, {
    width: '100%',
    padding: contract.space[2],
  }),
  variants: {
    visible: {
      true: inLayer(composed, {
        display: 'block',
      }),
      false: inLayer(composed, {
        display: 'none',
      }),
    },
  },
});

export const controls = style(
  inLayer(composed, {
    display: 'flex',
    alignItems: 'center',
    paddingTop: contract.space[2],
    paddingBottom: contract.space[2],
  }),
);

export const countDownContainer = style(
  inLayer(composed, {
    display: 'flex',
    padding: contract.space[6],
    marginBottom: contract.space[4],
    boxShadow: contract.shadows.in,
    backgroundColor: contract.colors.canvas,
    height: '50px',
    color: contract.colors.canvasText,
  }),
);

export const videoFont = style(
  inLayer(composed, {
    fontFamily: R95VideoNumbers,
    textTransform: 'uppercase',
  }),
);

export const duration = style(
  inLayer(composed, {
    marginTop: 'auto',
  }),
);

export const currentTime = style(
  inLayer(composed, {
    marginTop: 'auto',
    fontSize: 22,
  }),
);

export const openingText = style(
  inLayer(composed, {
    height: 12,
  }),
);

export const elapsedTime = style(
  inLayer(composed, {
    height: contract.space[12],
  }),
);

export const loadingIcon = style(
  inLayer(composed, {
    borderRight: 'none',
    borderBottom: 'none',
  }),
);

export const divider = style(
  inLayer(composed, {
    display: 'block',
    height: contract.space[1],
    borderTopStyle: 'solid',
    borderTopWidth: contract.space[1],
    borderTopColor: contract.colors.borderDark,
    borderBottomWidth: contract.space[1],
    borderBottomStyle: 'solid',
    borderBottomColor: contract.colors.borderLightest,
    marginBottom: contract.space[2],
  }),
);

export const controlBtn = style(
  inLayer(composed, {
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
  }),
);

globalStyle(
  `${controlBtn} svg`,
  inLayer(composed, {
    fill: contract.colors.materialText,
  }),
);

globalStyle(
  `${controlBtn}:disabled svg`,
  inLayer(composed, {
    fill: contract.colors.borderDark,
    borderBottomWidth: contract.space[1],
    borderBottomStyle: 'solid',
    borderBottomColor: contract.colors.borderLightest,
    borderRightWidth: contract.space[1],
    borderRightStyle: 'solid',
    borderRightColor: contract.colors.borderLightest,
  }),
);

export const range = style(
  inLayer(composed, {
    width: '70%',
    marginLeft: 20,
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
  }),
);
