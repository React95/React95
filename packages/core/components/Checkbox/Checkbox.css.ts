import check from './imgs/check.svg';
import checkDisabled from './imgs/check-disabled.svg';
import { globalStyle, style } from '@vanilla-extract/css';
import { contract } from '../themes/contract.css';

export const icon = style({
  width: contract.space[12],
  height: contract.space[12],
  display: 'inline-block',
  position: 'absolute',
  left: '0',
  top: contract.space[2],
  borderLeftStyle: 'solid',
  borderLeftWidth: contract.space[1],
  borderLeftColor: contract.colors.borderDark,
  borderTopStyle: 'solid',
  borderTopWidth: contract.space[1],
  borderTopColor: contract.colors.borderDark,
  backgroundColor: contract.colors.inputBackground,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
  backgroundSize: '7px 7px',
  boxShadow: contract.shadows.input,
});

export const text = style({
  padding: contract.space[1],
  userSelect: 'none',
});

export const field = style({
  width: contract.space[12],
  height: contract.space[12],
  margin: '0',
  position: 'absolute',
  top: contract.space[2],
  left: '0',
  opacity: 0,
  selectors: {},
});

export const label = style({
  display: 'inline-block',
  height: contract.space[15],
  lineHeight: 1.5,
  position: 'relative',
  marginBlock: contract.space[4],
  paddingLeft: contract.space[20],
  selectors: {
    '&:has(:disabled)': {
      color: contract.colors.borderDark,
      textShadow: `0.5px 0.5px ${contract.colors.borderLight}`,
    },
  },
});

globalStyle(`${field}:checked + ${icon}`, {
  backgroundImage: `url('${check}')`,
});

globalStyle(`${field}:focus ~ ${text}, ${field}:active ~ ${text}`, {
  borderWidth: contract.space[1],
  borderStyle: 'dotted',
  padding: '0',
});

globalStyle(`${field}:checked:disabled + ${icon}`, {
  backgroundImage: `url('${checkDisabled}')`,
  backgroundSize: '7px 7px, 1.9px 1.9px',
});

globalStyle(`${field}:disabled + ${icon}`, {
  backgroundColor: contract.colors.inputBackgroundDisabled,
});
