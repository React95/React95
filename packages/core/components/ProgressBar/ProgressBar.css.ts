import { style } from '@vanilla-extract/css';
import { contract } from '../ThemeProvider/themes/contract.css';

export const wrapper = style({
  height: contract.space[20],
  position: 'relative',
  textAlign: 'center',
});

export const whiteBar = style({
  height: contract.space[20],
  lineHeight: contract.space[20],
  borderLeft: contract.space[1],
  borderLeftStyle: 'solid',
  borderLeftColor: contract.colors.borderDark,
  borderTop: contract.space[1],
  borderTopStyle: 'solid',
  borderTopColor: contract.colors.borderDark,
  backgroundColor: contract.colors.inputBackground,
  color: contract.colors.materialText,
  boxShadow: contract.shadows.input,
});

export const container = style({
  position: 'absolute',
  top: '0',
  left: '0',
  overflow: 'hidden',
});

export const progress = style({
  height: contract.space[17],
  lineHeight: contract.space[18],
  marginLeft: contract.space[2],
  marginTop: contract.space[2],
  backgroundColor: contract.colors.progress,
  color: contract.colors.materialTextInvert,
});
