import React, { forwardRef } from 'react';
import cn from 'classnames';

import { button } from './Button.css';
import { Frame, FrameProps } from '../Frame/Frame';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  FrameProps;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    return (
      <Frame
        as="button"
        {...props}
        className={cn(button, props.className)}
        ref={ref}
      />
    );
  },
);
