import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const NavItem = styled.li`
  list-style: none;
  padding: 2px 8px;
  background-color: #c3c7cb;
  box-shadow: inset 0px 1px 0px 0px #ffffff, -2px 1px 0 -1px #c3c7cb,
    -3px 1px 0px -1px #ffffff, -2px 0px 0px -1px #ffffff, 2px 1px 0 -1px #868a8e,
    2px 0px 0 -1px #000, 3px 1px 0 -1px #000;
  margin-right: 2px;
  margin-left: 2px;

  ${props =>
    props.active &&
    css`
      margin-top: -2px;
      margin-left: -2px;
      margin-bottom: 1px;
      &:first-child {
        margin-left: 2px;
      }

      box-shadow: inset 0px 1px 0px 0px #ffffff, -2px 1px 0 -1px #c3c7cb,
        -0.5px 3px 0 0.5px #c3c7cb, -2px 2px 0px 0px #fff,
        -2px 0px 0px -1px #ffffff, 1px 2px 0 0px #868a8e, 2px 0px 0 -1px #000,
        2px 2px 0 0px #000;

      & + li {
        margin-left: 0;
        box-shadow: inset 0px 1px 0px 0px #ffffff, 2px 1px 0 -1px #868a8e,
          2px 0px 0 -1px #000, 3px 1px 0 -1px #000;
      }
    `}
`;

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
      <NavItem active={activeTab === title} onClick={this.onClick}>
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
