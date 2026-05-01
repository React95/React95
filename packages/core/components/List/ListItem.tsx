import type {
  ElementType,
  ForwardedRef,
  LiHTMLAttributes,
  ReactElement,
} from 'react';
import cn from 'classnames';

import {
  Frame,
  FrameProps,
  InferredElement,
  Polymorphic,
  fixedForwardRef,
} from '../Frame/Frame';
import { listItem } from './List.css';

type ItemProps<TAs extends ElementType = 'li'> =
  LiHTMLAttributes<HTMLLIElement> & Polymorphic<TAs, FrameProps>;

const ItemComponent = fixedForwardRef<HTMLLIElement, ItemProps<'li'>>(
  (rest, ref) => (
    <Frame
      {...rest}
      ref={ref}
      className={cn(listItem, rest.className)}
      as="li"
    />
  ),
);

const Item = ItemComponent as <TAs extends ElementType = 'li'>(
  props: ItemProps<TAs> & { ref?: ForwardedRef<InferredElement<TAs>> },
) => ReactElement;

export type ListItemProps<TAs extends ElementType = 'li'> = {
  icon?: ReactElement;
} & ItemProps<TAs>;

const ListItemComponent = fixedForwardRef<HTMLLIElement, ListItemProps<'li'>>(
  ({ icon, children = [], ...rest }, ref) => (
    <Item {...rest} ref={ref}>
      {icon}
      {children}
    </Item>
  ),
);

export const ListItem = ListItemComponent as <TAs extends ElementType = 'li'>(
  props: ListItemProps<TAs> & { ref?: ForwardedRef<InferredElement<TAs>> },
) => ReactElement;
