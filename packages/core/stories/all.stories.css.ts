import { globalStyle, style } from '@vanilla-extract/css';

export const list = style({
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  height: '620px',
});

globalStyle(`${list} > *`, {
  marginRight: '10px',
});
