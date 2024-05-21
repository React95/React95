import React, { forwardRef } from 'react';

import { Frame, FrameProps } from '../Frame/Frame';
import { divider } from './List.css';
import cn from 'classnames';

export type DividerProps = Omit<FrameProps<'li'>, 'as'>;

export const Divider = forwardRef<HTMLLIElement, DividerProps>((rest, ref) => (
  <Frame {...rest} ref={ref} className={cn(divider, rest.className)} as="li" />
));

Divider.displayName = 'List.Divider';
