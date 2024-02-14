import ListItem from './ListItem';
import { Divider } from './ListDivider';
import { Frame, FrameProps } from '../Frame/Frame';
import React from 'react';
import { list } from './List.css';
import cn from 'classnames';

export type ListProps = Omit<FrameProps<'ul'>, 'as'>;

const ListRenderer = React.forwardRef<HTMLUListElement, ListProps>(
  (rest, ref) => (
    <Frame {...rest} ref={ref} className={cn(list, rest.className)} as="ul" />
  ),
);

export type IListProps = typeof ListRenderer & {
  Item: typeof ListItem;
  Divider: typeof Divider;
};

export const List: IListProps = Object.assign(ListRenderer, {
  Item: ListItem,
  Divider: Divider,
});
