import type {
  ButtonHTMLAttributes,
  ElementType,
  ForwardedRef,
  ReactElement,
} from 'react';
import cn from 'classnames';

import { button } from './Button.css';
import {
  Frame,
  FrameProps,
  InferredElement,
  Polymorphic,
  fixedForwardRef,
} from '../Frame/Frame';

export type ButtonProps<TAs extends ElementType = 'button'> =
  ButtonHTMLAttributes<HTMLButtonElement> & Polymorphic<TAs, FrameProps>;

const ButtonComponent = fixedForwardRef<
  HTMLButtonElement,
  ButtonProps<'button'>
>((props, ref) => {
  return (
    <Frame
      as="button"
      {...props}
      className={cn(button, props.className)}
      ref={ref}
    />
  );
});

export const Button = ButtonComponent as <TAs extends ElementType = 'button'>(
  props: ButtonProps<TAs> & { ref?: ForwardedRef<InferredElement<TAs>> },
) => ReactElement;
