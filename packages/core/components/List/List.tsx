import React from 'react';
import type {
  ElementRef,
  ElementType,
  ForwardedRef,
  HTMLAttributes,
  ReactElement,
} from 'react';
import cn from 'classnames';

import { ListItem } from './ListItem';
import { Divider } from './ListDivider';
import {
  Frame,
  FrameProps,
  Polymorphic,
  fixedForwardRef,
} from '../Frame/Frame';
import { list } from './List.css';

export type ListProps<TAs extends ElementType = 'ul'> =
  HTMLAttributes<HTMLUListElement> & Polymorphic<TAs, FrameProps>;

const ListComponent = fixedForwardRef<HTMLUListElement, ListProps<'ul'>>(
  (rest, ref) => (
    <Frame {...rest} ref={ref} className={cn(list, rest.className)} as="ul" />
  ),
);

type ListReturnType = <TAs extends ElementType = 'ul'>(
  props: ListProps<TAs> & { ref?: ForwardedRef<ElementRef<TAs>> },
) => ReactElement;

interface ListStatics {
  Item: typeof ListItem;
  Divider: typeof Divider;
}

type ListWithStatics = ListReturnType & ListStatics;

export const List = Object.assign(ListComponent, {
  Item: ListItem,
  Divider: Divider,
}) as ListWithStatics;
