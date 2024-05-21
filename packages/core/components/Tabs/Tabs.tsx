import React, { useState, forwardRef, Children } from 'react';
import type { MouseEvent, ReactElement } from 'react';
import cn from 'classnames';

import { Tab, TabProps } from './Tab';
import { navContainer, navbar } from './Tabs.css';
import { Frame, FrameProps } from '../Frame/Frame';

export type TabsProps = {
  defaultActiveTab?: string;
  children: ReactElement<TabProps> | Array<ReactElement<TabProps>>;

  onChange?(title: string, e: MouseEvent): void;
} & Omit<FrameProps<'ol'>, 'as'>;

export const Tabs = forwardRef<HTMLOListElement, TabsProps>(
  ({ children, defaultActiveTab, onChange, ...rest }, ref) => {
    const [firstTab] = Children.toArray(children) as Array<
      ReactElement<TabProps>
    >;
    const [activeTab, setActiveTab] = useState(
      defaultActiveTab || firstTab.props.title,
    );

    return (
      <>
        <Frame
          {...rest}
          className={cn(navbar, rest.className)}
          as="ol"
          ref={ref}
        >
          {Children.map(children, (child: ReactElement<TabProps>) => {
            const { title, disabled } = child.props;

            return (
              <Tab
                key={title}
                {...child.props}
                activeTab={activeTab}
                onClick={e => {
                  if (!disabled) {
                    if (onChange) {
                      onChange(title, e);
                    }
                    setActiveTab(title);
                  }
                }}
              />
            );
          })}
        </Frame>

        <Frame className={navContainer} width={rest.width || rest.w}>
          {Children.map(
            children,
            (child: ReactElement<TabProps>) =>
              child.props.title === activeTab && child.props.children,
          )}
        </Frame>
      </>
    );
  },
);
