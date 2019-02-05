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
  padding: 2px 8px;
  margin-left: 1px;
  background-color: #c3c7cb;
  box-shadow: inset 0px 1px 0px 0px #ffffff, 2px 1px 0 -1px #868a8e,
    1px 1px 0 0px #868a8e, 0px 1px 0 0px #868a8e, 2px 0px 0 -1px #000,
    2px 2px 0 0px #000, 0px 2px 0 0px #000, 0px 1px 0px 1px #ffffff,
    2px 0px 0 0px #000;
`;

const renderIf = (conditional, renderFn) => conditional && renderFn();

class Tabs extends Component {
  constructor(props) {
    super(props);

    const { children } = props;

    const firstTab = React.Children.toArray(children)[0];

    this.state = {
      activeTab: firstTab.props.title,
    };
  }

  onTabClick = ({ props: { title } }) => {
    this.setState({ activeTab: title });
  };

  render() {
    const { children } = this.props;
    const { activeTab } = this.state;

    return (
      <React.Fragment>
        <Navbar>
          {React.Children.map(children, child => {
            const { title } = child.props;

            return (
              <Tab
                key={title}
                title={title}
                activeTab={activeTab}
                onClick={this.onTabClick}
              />
            );
          })}
        </Navbar>

        <NavContainer>
          {React.Children.map(children, child =>
            renderIf(
              child.props.title === activeTab,
              () => child.props.children,
            ),
          )}
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
