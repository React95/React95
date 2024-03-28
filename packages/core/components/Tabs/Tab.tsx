import React, { forwardRef } from 'react';

import { tab } from './Tabs.css';
import { Frame, FrameProps } from '../Frame/Frame';

export type TabProps = {
  activeTab?: string;
  title: string;
  disabled?: boolean;
  onClick?(e: React.MouseEvent): void;
} & React.HTMLProps<HTMLLIElement> &
  Omit<FrameProps<'li'>, 'as'>;

export const Tab = forwardRef<HTMLLIElement, TabProps>(
  ({ activeTab, title, ...rest }, ref) => (
    <Frame
      {...rest}
      className={tab({ active: activeTab === title })}
      ref={ref}
      as="li"
    >
      {title}
    </Frame>
  ),
);
