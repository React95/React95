import React, { forwardRef } from 'react';
import cn from 'classnames';

import { IListProps } from './List';

import { Frame, FrameProps } from '../Frame/Frame';
import { listItem } from './List.css';

type ItemProps = Omit<FrameProps<'li'>, 'as'> & {
  icon?: boolean;
  hasList: boolean;
};

const Item = React.forwardRef<HTMLLIElement, ItemProps>((rest, ref) => (
  <Frame {...rest} ref={ref} className={cn(listItem, rest.className)} as="li" />
));

export type ListItemProps = {
  icon?: React.ReactElement;
} & React.HtmlHTMLAttributes<HTMLLIElement>;

const ListItem = forwardRef<HTMLLIElement, ListItemProps>(
  ({ icon, children = [], ...rest }, ref) => (
    <Item
      {...rest}
      icon={!!icon}
      ref={ref}
      hasList={Boolean(
        children &&
          React.Children.map<any, IListProps>(children as any, child =>
            React.isValidElement<IListProps>(child),
          ).some(child => child),
      )}
    >
      {icon}
      {children}
    </Item>
  ),
);

ListItem.displayName = 'List.Item';

export default ListItem;
