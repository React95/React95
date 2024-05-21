import React, { forwardRef } from 'react';
import type { ReactElement, HtmlHTMLAttributes } from 'react';
import cn from 'classnames';

import { Frame, FrameProps } from '../Frame/Frame';
import { listItem } from './List.css';

type ItemProps = Omit<FrameProps<'li'>, 'as'>;

const Item = forwardRef<HTMLLIElement, ItemProps>((rest, ref) => (
  <Frame {...rest} ref={ref} className={cn(listItem, rest.className)} as="li" />
));

export type ListItemProps = {
  icon?: ReactElement;
} & HtmlHTMLAttributes<HTMLLIElement>;

export const ListItem = forwardRef<HTMLLIElement, ListItemProps>(
  ({ icon, children = [], ...rest }, ref) => (
    <Item {...rest} ref={ref}>
      {icon}
      {children}
    </Item>
  ),
);

ListItem.displayName = 'List.Item';
