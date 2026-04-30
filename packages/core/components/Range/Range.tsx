import { forwardRef, InputHTMLAttributes } from 'react';
import { Frame, FrameProps } from '../Frame/Frame';
import { range } from './Range.css';
import cn from 'classnames';

export type RangeProps = InputHTMLAttributes<HTMLInputElement> &
  Omit<FrameProps, 'as'>;

export const Range = forwardRef<HTMLInputElement, RangeProps>((rest, ref) => (
  <Frame
    {...rest}
    ref={ref}
    className={cn(range, rest.className)}
    as="input"
    type="range"
  />
));
