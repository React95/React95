import { style } from '@vanilla-extract/css';
import { contract } from '../ThemeProvider/themes/contract.css';

import caret from './imgs/downcaret.png';

export const wrapper = style({
  position: 'relative',
  width: '200px',
  height: contract.space[20],

  ':after': {
    display: 'flex',
    justifyContent: 'center',
    width: contract.space[18],
    height: contract.space[17],
    fontSize: '14px',
    lineHeight: 1.1,
    content: "''",
    pointerEvents: 'none',
    position: 'absolute',
    right: contract.space[1],
    top: contract.space[2],
    backgroundColor: contract.colors.material,
    borderRightStyle: 'solid',
    borderRightWidth: contract.space[1],
    borderBottomStyle: 'solid',
    borderBottomWidth: contract.space[1],
    backgroundImage: `url('${caret}')`,
    backgroundPosition: '60% 60%',
    backgroundRepeat: 'no-repeat',
    boxShadow: `inset 0.5px 0.7px 0px 0.7px ${contract.colors.material},
    inset -1px 0px 0 1px ${contract.colors.borderDark},
    inset 1.5px 1.5px 0px 1.5px ${contract.colors.borderLightest}`,
  },
});

export const select = style({
  position: 'relative',
  outline: 'none',
  border: 'none',
  borderRadius: '0',
  width: '100%',
  height: contract.space[20],
  padding: contract.space[3],
  color: contract.colors.materialText,
  backgroundColor: contract.colors.inputBackground,
  borderLeftStyle: 'solid',
  borderLeftWidth: contract.space[1],
  borderLeftColor: contract.colors.borderDark,
  borderTopStyle: 'solid',
  borderTopWidth: contract.space[1],
  borderTopColor: contract.colors.borderDark,
  appearance: 'none',
  boxShadow: `inset -1px -1px 0 0 ${contract.colors.material},
    inset 1px 1px 0 0 ${contract.colors.borderDarkest},
    0.5px 0.5px 0 0.5px ${contract.colors.borderLightest};`,
});
