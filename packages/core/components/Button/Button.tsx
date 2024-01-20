import React, { FC } from 'react';

import { styles } from './Button.css';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: FC<ButtonProps> = props => {
  return <button {...props} className={[styles, props.className].join(' ')} />;
};
