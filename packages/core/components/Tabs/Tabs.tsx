import React, { forwardRef } from 'react';
import cn from 'classnames';

import Frame from '../Frame';
import { Tab, TabProps } from './Tab';
import { navContainer, navbar } from './Tabs.css';
import { FrameProps } from '../Frame/Frame';

export type TabsProps = {
  defaultActiveTab?: string;
  children: React.ReactElement<TabProps> | Array<React.ReactElement<TabProps>>;

  onChange?(title: string, e: React.MouseEvent): void;
} & Omit<FrameProps<'ol'>, 'as'>;

export const Tabs = forwardRef<HTMLOListElement, TabsProps>(
  ({ children, defaultActiveTab, onChange, ...rest }, ref) => {
    const [firstTab] = React.Children.toArray(children) as Array<
      React.ReactElement<TabProps>
    >;
    const [activeTab, setActiveTab] = React.useState(
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
          {React.Children.map(
            children,
            (child: React.ReactElement<TabProps>) => {
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
            },
          )}
        </Frame>

        <Frame className={navContainer} width={rest.width || rest.w}>
          {React.Children.map(
            children,
            (child: React.ReactElement<TabProps>) =>
              child.props.title === activeTab && child.props.children,
          )}
        </Frame>
      </>
    );
  },
);
