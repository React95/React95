import { style } from '@vanilla-extract/css';
import { Cursor } from '../Cursor/Cursor.css';
import { contract } from '../themes/contract.css';

export const input = style([
  Cursor.Text,
  {
    outline: 'none',
    border: 'none',
    paddingTop: contract.space[3],
    paddingRight: contract.space[3],
    paddingBottom: contract.space[5],
    paddingLeft: contract.space[3],
    color: contract.colors.materialText,
    backgroundColor: contract.colors.inputBackground,
    borderRadius: '0',
    borderTopWidth: contract.space[1],
    borderTopStyle: 'solid',
    borderTopColor: contract.colors.borderDark,
    borderRightWidth: '0',
    borderBottomWidth: '0',
    borderLeftWidth: contract.space[1],
    borderLeftStyle: 'solid',
    borderLeftColor: contract.colors.borderDark,
    boxShadow: contract.shadows.input,
    WebkitAppearance: 'none',
  },
]);
