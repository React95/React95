import { style } from '@vanilla-extract/css';
import { contract } from '../themes/contract.css';
import { calc } from '@vanilla-extract/css-utils';

export const tip = style({
  background: `radial-gradient(#ff0 20%, transparent 20%) 0 0,
     radial-gradient(#ff0 20%, transparent 20%) 4px 4px,
     radial-gradient(rgba(255, 255, 255, 0.1) 20%, transparent 25%) 0 1px,
     radial-gradient(rgba(255, 255, 255, 0.1) 20%, transparent 25%) 3px 4px`,
  backgroundSize: `${contract.space[7]} ${contract.space[7]}`,
  backgroundColor: contract.colors.borderLightest,
  borderWidth: contract.space[1],
  borderStyle: 'solid',
  paddingTop: contract.space[2],
  paddingRight: contract.space[2],
  paddingBottom: contract.space[2],
  paddingLeft: contract.space[4],
  boxShadow: 'none',
  position: 'absolute',
  top: calc.negate(contract.space[20]),
  textAlign: 'center',
  zIndex: contract.zIndices.taskbar,
});

export const wrapper = style({
  display: 'inline-block',
  position: 'relative',
  cursor: 'default',
  whiteSpace: 'nowrap',
});
