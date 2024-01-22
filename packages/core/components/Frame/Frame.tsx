import React, {
  ComponentPropsWithRef,
  ElementType,
  ForwardedRef,
  forwardRef,
} from 'react';
import { atoms, extractAtoms } from './atoms';
import { Sprinkles } from './sprinkles.css';

type FixedForwardRef = <T, P = object>(
  render: (props: P, ref: React.Ref<T>) => React.ReactNode,
) => (props: P & React.RefAttributes<T>) => React.ReactNode;

const fixedForwardRef = forwardRef as FixedForwardRef;

type DistributiveOmit<T, TOmitted extends PropertyKey> = T extends any
  ? Omit<T, TOmitted>
  : never;

const FrameComponent = <TAs extends ElementType>(
  props: {
    as?: TAs;
  } & DistributiveOmit<
    ComponentPropsWithRef<ElementType extends TAs ? 'div' : TAs>,
    'as'
  > &
    Sprinkles,
  ref: ForwardedRef<any>,
) => {
  const { as: Component = 'div', ...other } = props;

  const [atomsProps, propsToForward] = extractAtoms(other as Sprinkles);

  const className = atoms({
    ...atomsProps,
  });

  return <Component {...propsToForward} className={className} ref={ref} />;
};

export const Frame = fixedForwardRef(FrameComponent);
