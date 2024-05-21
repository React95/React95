import React, { forwardRef } from 'react';
import type {
  ComponentPropsWithRef,
  ElementType,
  ForwardedRef,
  Ref,
  ReactNode,
  RefAttributes,
} from 'react';
import { Sprinkles, sprinkles } from './Frame.css';
import cn from 'classnames';

type FixedForwardRef = <T, P = object>(
  render: (props: P, ref: Ref<T>) => ReactNode,
) => (props: P & RefAttributes<T>) => ReactNode;

export const fixedForwardRef = forwardRef as FixedForwardRef;

type DistributiveOmit<T, TOmitted extends PropertyKey> = T extends any
  ? Omit<T, TOmitted>
  : never;

export type FrameProps<TAs extends ElementType> = {
  as?: TAs;
} & DistributiveOmit<
  ComponentPropsWithRef<ElementType extends TAs ? 'div' : TAs>,
  'as'
> &
  Sprinkles;

const FrameComponent = <TAs extends ElementType = 'div'>(
  props: FrameProps<TAs>,
  ref: ForwardedRef<any>,
) => {
  const { as, children, ...rest } = props;
  const Component = as || 'div';
  const { className, style, otherProps } = sprinkles(rest);

  return (
    <Component
      {...otherProps}
      style={{ ...style, ...otherProps.style }}
      className={cn(className, otherProps.className)}
      ref={ref}
    >
      {children}
    </Component>
  );
};

export const Frame = fixedForwardRef(FrameComponent);
