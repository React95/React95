import React, { forwardRef } from 'react';
import { Frame, FrameProps } from '../Frame/Frame';
import { input } from './Input.css';
import cn from 'classnames';

export type InputProps = Omit<FrameProps<'input'>, 'as'>;

export const Input = forwardRef<HTMLInputElement, InputProps>((rest, ref) => (
  <Frame {...rest} ref={ref} className={cn(input, rest.className)} as="input" />
));
