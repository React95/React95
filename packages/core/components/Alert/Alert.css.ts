import { style } from '@vanilla-extract/css';
import { contract } from '../themes/contract.css';

export const message = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const icon = style({
  paddingTop: contract.space[7],
  paddingRight: contract.space[15],
  paddingBottom: contract.space[7],
  paddingLeft: contract.space[7],
});

export const dialog = style({
  display: 'flex',
  flexDirection: 'row',
});
