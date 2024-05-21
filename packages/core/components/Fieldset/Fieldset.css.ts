import { style } from '@vanilla-extract/css';
import { contract } from '../themes/contract.css';

export const field = style({
  borderTopStyle: 'groove',
  borderTopWidth: contract.space[2],
  borderTopColor: contract.colors.borderLighter,
  borderLeftStyle: 'groove',
  borderLeftWidth: contract.space[2],
  borderLeftColor: contract.colors.borderLighter,
  borderBottomStyle: 'solid',
  borderBottomWidth: contract.space[1],
  borderBottomColor: contract.colors.borderDark,
  borderRightStyle: 'solid',
  borderRightWidth: contract.space[1],
  borderRightColor: contract.colors.borderDark,
  boxShadow: `1px 1px 0 0 ${contract.colors.borderLighter}`,
});

export const legend = style({
  paddingLeft: contract.space[4],
  paddingRight: contract.space[1],
});
