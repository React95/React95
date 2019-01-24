import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const NavItem = styled.li``;

class Tab extends Component {
  constructor(props) {
    super(props);
  }

  onClick = () => {
    const { onClick } = this.props;
    onClick(this);
  };

  render() {
    const { activeTab, title } = this.props;

    return (
      <NavItem activeTab={activeTab} onClick={this.onClick}>
        {title}
      </NavItem>
    );
  }
}

Tab.propTypes = {
  activeTab: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Tab;
