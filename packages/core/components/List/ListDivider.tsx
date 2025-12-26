import React from 'react';
import type {
  ElementRef,
  ElementType,
  ForwardedRef,
  LiHTMLAttributes,
  ReactElement,
} from 'react';

import {
  Frame,
  FrameProps,
  Polymorphic,
  fixedForwardRef,
} from '../Frame/Frame';
import { divider } from './List.css';
import cn from 'classnames';

export type DividerProps<TAs extends ElementType = 'li'> =
  LiHTMLAttributes<HTMLLIElement> & Polymorphic<TAs, FrameProps>;

const DividerComponent = fixedForwardRef<HTMLLIElement, DividerProps<'li'>>(
  (rest, ref) => (
    <Frame
      {...rest}
      ref={ref}
      className={cn(divider, rest.className)}
      as="li"
    />
  ),
);

export const Divider = DividerComponent as <TAs extends ElementType = 'li'>(
  props: DividerProps<TAs> & { ref?: ForwardedRef<ElementRef<TAs>> },
) => ReactElement;
