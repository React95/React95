import { style } from '@vanilla-extract/css';
import { contract } from '../themes/contract.css';
import { inLayer, composed } from '../shared/layers.css';

export const message = style(
  inLayer(composed, {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }),
);

export const icon = style(
  inLayer(composed, {
    paddingTop: contract.space[7],
    paddingRight: contract.space[15],
    paddingBottom: contract.space[7],
    paddingLeft: contract.space[7],
  }),
);

export const dialog = style(
  inLayer(composed, {
    display: 'flex',
    flexDirection: 'row',
  }),
);
