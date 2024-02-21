import * as React from 'react';
import { Frame, FrameProps } from '../Frame/Frame';
import { range } from './Range.css';
import cn from 'classnames';

export type RangeProps = Omit<FrameProps<'input'>, 'as'>;

export const Range = React.forwardRef<HTMLInputElement, RangeProps>(
  (rest, ref) => (
    <Frame
      {...rest}
      ref={ref}
      className={cn(range, rest.className)}
      as="input"
      type="range"
    />
  ),
);
