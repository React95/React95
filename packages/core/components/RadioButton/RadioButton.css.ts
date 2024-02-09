import {
  radioChecked,
  radioCheckedDisabled,
  radioUnchecked,
  radioUncheckedDisabled,
} from './radioButtonStates';
import { globalStyle, style } from '@vanilla-extract/css';
import { contract } from '../ThemeProvider/themes/contract.css';

export const icon = style({
  width: contract.space[12],
  height: contract.space[12],
  display: 'inline-block',
  position: 'absolute',
  left: contract.space[0],
  top: contract.space[0],
  backgroundImage: `url('${radioUnchecked}')`,
  imageRendering: 'pixelated',
});

export const text = style({
  padding: contract.space[1],
  userSelect: 'none',
  position: 'absolute',
  top: '0',
  left: contract.space[18],
});

export const label = style({
  position: 'relative',
  marginBottom: contract.space[10],
  display: 'block',
  selectors: {
    '&:has(:disabled)': {
      color: contract.colors.materialTextDisabled,
      textShadow: `0.5px 0.5px ${contract.colors.materialTextDisabledShadow}`,
    },
  },
});

export const field = style({
  margin: 0,
  opacity: 0,
});

globalStyle(`${field}:focus ~ ${text}, &:active + ${text}`, {
  borderWidth: contract.space[1],
  borderStyle: 'dotted',
  padding: 0,
});

globalStyle(`${field}:checked + ${icon}`, {
  backgroundImage: `url('${radioChecked}')`,
});

globalStyle(`${field}:disabled + ${icon}`, {
  backgroundImage: `url('${radioUncheckedDisabled}')`,
});

globalStyle(`${field}:checked:disabled + ${icon}`, {
  backgroundImage: `url('${radioCheckedDisabled}')`,
});
