import { globalStyle, style } from '@vanilla-extract/css';
import { contract } from '../ThemeProvider/themes/contract.css';
import { recipe } from '@vanilla-extract/recipes';

export const optionsBox = style({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
});

export const option = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: contract.space[2],
  padding: contract.space[0],
  width: contract.space[17],
  height: contract.space[14],
  minWidth: contract.space[0],
  fontWeight: 600,
  fontSize: 10,
  selectors: {
    '&:active': {
      paddingTop: contract.space[1],
      paddingRight: contract.space[0],
      paddingBottom: contract.space[0],
      paddingLeft: contract.space[1],
      outline: 'none',
    },
    '&:first-child': {
      marginRight: contract.space[0],
    },
    '&:focus': {
      boxShadow: `inset 1px 1px 0px 1px ${contract.colors.borderLightest},
        inset -1px -1px 0px 1px ${contract.colors.borderDark}`,
    },
  },
});

export const titleBarBackground = recipe({
  base: {
    height: contract.space[20],
    marginBottom: contract.space[2],
    padding: contract.space[2],
    display: 'flex',
    boxShadow: 'none',
    userSelect: 'none',
  },
  variants: {
    active: {
      true: {
        background: contract.colors.headerBackground,
        color: contract.colors.headerText,
      },
      false: {
        background: contract.colors.headerNotActiveBackground,
        color: contract.colors.headerNotActiveText,
      },
    },
  },
});

globalStyle(`${titleBarBackground.classNames.base} svg`, {
  width: contract.space[16],
  height: contract.space[16],
  marginRight: contract.space[4],
});

export const title = style({
  flexGrow: 1,
  lineHeight: '1.4em',
  margin: '0',
  fontSize: '1em',
  textShadow: '0.5px 0px white, 1.5px 0px white',
  color: 'transparent',
  letterSpacing: '1px',
});
