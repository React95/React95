import { style } from '@vanilla-extract/css';
import { contract } from '../components/themes/contract.css';

export const code = style({
  fontSize: '13px',
  backgroundColor: contract.colors.borderLight,
  padding: '1px 4px',
  border: '1px solid',
  borderColor: contract.colors.borderDark,
});
