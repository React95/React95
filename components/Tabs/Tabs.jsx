import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Tab from './Tab';

const Navbar = styled.ol`
  display: flex;
  padding: 0;
  margin: 0;
`;

const NavContainer = styled.div`
  padding: 12px;
  margin-left: 1px;
  background-color: #c3c7cb;
  box-shadow: inset 0px 1px 0px 0px #ffffff, 2px 1px 0 -1px #868a8e,
    1px 1px 0 0px #868a8e, 0px 1px 0 0px #868a8e, 2px 0px 0 -1px #000,
    2px 2px 0 0px #000, 0px 2px 0 0px #000, 0px 1px 0px 1px #ffffff,
    2px 0px 0 0px #000;
`;

const If = ({ condition, children }) => condition && children;

class Tabs extends Component {
  constructor(props) {
    super(props);

    const { children } = props;

    const firstTab = React.Children.toArray(children)[0];

    const { activeTab = firstTab.props.title } = props;

    this.state = {
      activeTab,
    };
  }

  onTabClick = ({ props: { title } }) => {
    this.setState({ activeTab: title });
  };

  render() {
    const { children, style } = this.props;
    const { activeTab } = this.state;

    return (
      <React.Fragment>
        <Navbar style={style}>
          {React.Children.map(children, child => {
            const { title, disabled } = child.props;

            return (
              <Tab
                key={title}
                title={title}
                activeTab={activeTab}
                onClick={!disabled && this.onTabClick}
              />
            );
          })}
        </Navbar>

        <NavContainer style={style}>
          {React.Children.map(children, child => (
            <If condition={child.props.title === activeTab}>
              {child.props.children}
            </If>
          ))}
        </NavContainer>
      </React.Fragment>
    );
  }
}

Tabs.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Tabs;
