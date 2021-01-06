import * as React from 'react';
import styled from '@xstyled/styled-components';

import Tab, { TabProps } from './Tab';
import Panel, { StyledPanel } from './../Panel/Panel';

const StyledTabs = styled.section`
  display: inline-block;
  position: relative;
`

const Navbar = styled(StyledPanel)`
  position: relative;
  z-index: 1;
  display: flex;
  padding: 0 0 3px;
  margin: 0 0 -5px 0;
  border: none;
  box-shadow: none;
  background-color: unset;
`;

const If = ({ condition, children }: { condition: Boolean; children: any }) =>
  condition && children;

interface TabsProps {
  style?: React.CSSProperties;
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
    <StyledTabs>
      <Navbar style={style} {...rest}>
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

      <Panel style={style} shadow='extrude'>
        {React.Children.map(children, (child: React.ReactElement<TabProps>) => (
          <If condition={child.props.title === activeTab}>
            {child.props.children}
          </If>
        ))}
      </Panel>
    </StyledTabs>
  );
};

export default Tabs;
