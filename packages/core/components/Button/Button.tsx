import React, { FC } from 'react';

import { button } from './Button.css';
import Frame from '../Frame';
import { FrameProps } from '../Frame/Frame';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  FrameProps;

export const Button: FC<ButtonProps> = props => {
  return (
    <Frame
      as="button"
      {...props}
      className={[button, props.className].join(' ')}
    />
  );
};
