import { globalStyle, style } from '@vanilla-extract/css';
import { contract } from '../themes/contract.css';
import { recipe } from '@vanilla-extract/recipes';
import { inLayer, components } from '../shared/layers.css';

export const modalWrapper = recipe({
  base: inLayer(components, {
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    padding: contract.space[2],
    top: '50px',
    backgroundColor: contract.colors.material,
    boxShadow: contract.shadows.out,
  }),
  variants: {
    active: {
      true: inLayer(components, {
        zIndex: contract.zIndices.modal,
      }),
    },
    minimized: {
      true: inLayer(components, {
        display: 'none',
      }),
      false: inLayer(components, {
        display: 'flex',
      }),
    },
  },
});

export const buttonWrapper = style(
  inLayer(components, {
    display: 'flex',
    gap: contract.space[6],
    flexDirection: 'row',
    padding: contract.space[6],
  }),
);

globalStyle(
  `${buttonWrapper} button`,
  inLayer(components, {
    minWidth: '70px',
  }),
);

export const content = style(
  inLayer(components, {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: contract.space[6],
    marginBlockStart: contract.space[4],
    marginInlineEnd: contract.space[1],
  }),
);

export const menuWrapper = style(
  inLayer(components, {
    display: 'flex',
    flexDirection: 'row',
    listStyle: 'none',
    margin: '0',
    paddingLeft: '0',
    paddingTop: '1px',
    paddingBottom: '1px',
    borderBottomStyle: 'solid',
    borderWidth: '1px',
    borderBottomColor: contract.colors.borderDark,
    boxShadow: `0 1px 0 0 ${contract.colors.borderLighter}`,
  }),
);

export const menuItem = recipe({
  base: inLayer(components, {
    position: 'relative',
    paddingLeft: '6px',
    paddingRight: '6px',
    userSelect: 'none',
  }),
  variants: {
    active: {
      true: inLayer(components, {
        backgroundColor: contract.colors.material,
        color: contract.colors.materialTextInvert,
      }),
    },
  },
});

globalStyle(
  `${menuItem.classNames.base} ul`,
  inLayer(components, {
    position: 'absolute',
    left: '0',
    color: contract.colors.materialText,
  }),
);
