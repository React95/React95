import { globalStyle, style } from '@vanilla-extract/css';
import { contract } from '../ThemeProvider/themes/contract.css';
import { recipe } from '@vanilla-extract/recipes';

export const modalWrapper = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    padding: '2px 2px 8px',
    top: '50px',
    backgroundColor: contract.colors.material,
    boxShadow: contract.shadows.out,
  },
  variants: {
    active: {
      true: {
        zIndex: contract.zIndices.modal,
      },
    },
  },
});

export const buttonWrapper = style({
  display: 'flex',
  gap: '6px',
  flexDirection: 'row',
  padding: '0 6px 6px 6px',
});

globalStyle(`${buttonWrapper} button`, {
  minWidth: '70px',
});

export const content = style({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  padding: '6px',
});

export const menuWrapper = style({
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
});

export const menuItem = recipe({
  base: {
    position: 'relative',
    paddingLeft: '6px',
    paddingRight: '6px',
    userSelect: 'none',
  },
  variants: {
    active: {
      true: {
        backgroundColor: contract.colors.material,
        color: contract.colors.materialTextInvert,
      },
    },
  },
});

globalStyle(`${menuItem.classNames.base} ul`, {
  position: 'absolute',
  left: '0',
  color: contract.colors.materialText,
});
