import { createElement, forwardRef } from 'react';
import type {
  ElementType,
  ForwardedRef,
  Ref,
  ReactNode,
  RefAttributes,
  ReactElement,
  PropsWithChildren,
  ComponentPropsWithoutRef,
} from 'react';
import { Sprinkles, sprinkles } from './Frame.css';
import cn from 'classnames';

type As = ElementType;
type Props = Record<string, unknown>;

export type Polymorphic<E extends As, P = Props> = P &
  PropsWithChildren<{
    as?: E;
  }> &
  ComponentPropsWithoutRef<E>;

export type InferredElement<C extends ElementType> =
  C extends keyof HTMLElementTagNameMap
    ? HTMLElementTagNameMap[C]
    : C extends keyof SVGElementTagNameMap
    ? SVGElementTagNameMap[C]
    : HTMLElement;

type FixedForwardRef = <T, P = object>(
  render: (props: P, ref: Ref<T>) => ReactNode,
) => (props: P & RefAttributes<T>) => ReactNode;

export const fixedForwardRef = forwardRef as FixedForwardRef;

export type FrameProps = Sprinkles;

const FrameComponent = <TAs extends As>(
  props: Polymorphic<TAs, FrameProps>,
  ref: ForwardedRef<InferredElement<TAs>>,
) => {
  const { as, children, ...rest } = props;
  const tag = as || 'div';
  const { className, style, otherProps } = sprinkles(rest);

  return createElement(
    tag,
    {
      ...otherProps,
      style: { ...style, ...otherProps.style },
      className: cn(className, otherProps.className),
      ref,
    },
    children,
  );
};

export const Frame = forwardRef(FrameComponent) as <E extends As>(
  p: Polymorphic<E, FrameProps> & {
    ref?: ForwardedRef<InferredElement<E>>;
  },
) => ReactElement | null;
