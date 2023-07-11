import styled from '@xstyled/styled-components';
import React, { forwardRef } from 'react';

import Frame from '../Frame';
import Tab, { TabProps } from './Tab';

const Navbar = styled(Frame)`
  display: flex;
  padding: 0;
  margin: 0;
  border: none;
  box-shadow: none;
  background-color: unset;
`;

const NavContainer = styled(Frame)`
  padding: 12;
  box-shadow: out;
`;

NavContainer.displayName = 'NavContainer';
export interface TabsProps {
  style?: React.CSSProperties;
  defaultActiveTab?: string;
  children: React.ReactElement<TabProps> | Array<React.ReactElement<TabProps>>;

  onChange?(title: string, e: React.MouseEvent): void;
}

const Tabs = forwardRef<HTMLOListElement, TabsProps>(
  ({ children, style, defaultActiveTab, onChange, ...rest }, ref) => {
    const [firstTab] = React.Children.toArray(children) as Array<
      React.ReactElement<TabProps>
    >;
    const [activeTab, setActiveTab] = React.useState(
      defaultActiveTab || firstTab.props.title,
    );

    return (
      <>
        <Navbar style={style} {...rest} as="ol" ref={ref}>
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
        </Navbar>

        <NavContainer style={style}>
          {React.Children.map(
            children,
            (child: React.ReactElement<TabProps>) =>
              child.props.title === activeTab && child.props.children,
          )}
        </NavContainer>
      </>
    );
  },
);

export default Tabs;
