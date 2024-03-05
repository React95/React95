import { style } from '@vanilla-extract/css';
import { Cursor } from '../components/Cursor/Cursor.css';
import { contract } from '../components/themes/contract.css';

export const btn = style([
  Cursor.Pointer,
  {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '4px',
    minWidth: '150px',
    boxShadow: 'none',
    selectors: {
      '&:hover': {
        boxShadow: contract.shadows.out,
      },
    },
  },
]);
