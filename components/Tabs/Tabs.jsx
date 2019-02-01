import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Tab from './Tab';

const Navbar = styled.nav``;

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
          {activeTab}
          <ol>
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
          </ol>
        </Navbar>

        {React.Children.map(children, child =>
          renderIf(child.props.title === activeTab, () => child),
        )}
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
