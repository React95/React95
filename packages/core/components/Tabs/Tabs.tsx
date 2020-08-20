import * as React from 'react';
import styled from '@xstyled/styled-components';

import Tab, { TabProps } from './Tab';
import Frame from '../Frame';

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

const If = ({ condition, children }: { condition: Boolean; children: any }) =>
  condition && children;

interface TabsProps {
  style: React.CSSProperties;
  defaultActiveTab?: string;

  onChange?(title: string, e: React.MouseEvent): void;
}

const Tabs: React.FC<TabsProps> = ({
  children,
  style,
  defaultActiveTab,
  onChange,
  ...rest
}) => {
  const [firstTab] = React.Children.toArray(children) as Array<
    React.ReactElement<TabProps>
  >;
  const [activeTab, setActiveTab] = React.useState(
    defaultActiveTab || firstTab.props.title,
  );

  return (
    <>
      <Navbar style={style} {...rest} as="ol">
        {React.Children.map(children, (child: React.ReactElement<TabProps>) => {
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
      </Navbar>

      <NavContainer style={style}>
        {React.Children.map(children, (child: React.ReactElement<TabProps>) => (
          <If condition={child.props.title === activeTab}>
            {child.props.children}
          </If>
        ))}
      </NavContainer>
    </>
  );
};

export default Tabs;
