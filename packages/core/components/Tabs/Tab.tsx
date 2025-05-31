import React, { forwardRef } from 'react';
import type { MouseEvent, HTMLProps } from 'react';
import cn from 'classnames';

import { tab } from './Tabs.css';
import { Frame, FrameProps } from '../Frame/Frame';

export type TabProps = {
  activeTab?: string;
  title: string;
  disabled?: boolean;
  onClick?(e: MouseEvent): void;
} & HTMLProps<HTMLLIElement> &
  Omit<FrameProps<'li'>, 'as'>;

export const Tab = forwardRef<HTMLLIElement, TabProps>(
  ({ activeTab, title, ...rest }, ref) => (
    <Frame
      {...rest}
      className={cn(tab({ active: activeTab === title }), rest.className)}
      ref={ref}
      as="li"
    >
      {title}
    </Frame>
  ),
);
