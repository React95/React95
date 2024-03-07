import React, { forwardRef } from 'react';

import { button } from './Button.css';
import Frame from '../Frame';
import { FrameProps } from '../Frame/Frame';
import cn from 'classnames';

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
