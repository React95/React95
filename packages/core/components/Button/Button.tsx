import React from 'react';
import type {
  ElementType,
  ReactElement,
  ElementRef,
  ForwardedRef,
  ButtonHTMLAttributes,
} from 'react';
import cn from 'classnames';

import { button } from './Button.css';
import { Frame, FrameProps, fixedForwardRef } from '../Frame/Frame';

export type ButtonProps<TAs extends ElementType> =
  ButtonHTMLAttributes<HTMLButtonElement> & FrameProps<TAs>;

export const Button = fixedForwardRef<HTMLButtonElement, ButtonProps<'button'>>(
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
) as <TAs extends ElementType = 'button'>(
  props: ButtonProps<TAs> & { ref?: ForwardedRef<ElementRef<TAs>> },
) => ReactElement;
