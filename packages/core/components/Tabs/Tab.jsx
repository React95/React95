import React from "react";
import PropTypes from "prop-types";
import styled from "@xstyled/styled-components";
import { th } from "@xstyled/system";

const NavItem = styled.li`
  list-style: none;
  padding: 3 6;
  background-color: grays.2;
  box-shadow: inset 0px 1px 0px 0px ${th("colors.white")},
    -2px 1px 0 -1px ${th("colors.grays.2")},
    -3px 1px 0px -1px ${th("colors.white")},
    -2px 0px 0px -1px ${th("colors.white")},
    2px 1px 0 -1px ${th("colors.grays.3")}, 2px 0px 0 -1px ${th("colors.black")},
    3px 1px 0 -1px ${th("colors.black")};
  margin-right: 2;
  margin-left: 2;

  &:first-child {
    margin-left: 4;
  }

  ${props =>
    props.active &&
    `
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

const Tab = ({ activeTab, title, ...rest }) => (
  <NavItem {...rest} active={activeTab === title}>
    {title}
  </NavItem>
);

Tab.propTypes = {
  activeTab: PropTypes.string,
  title: PropTypes.string.isRequired
};

Tab.defaultProps = {
  activeTab: undefined
};

export default Tab;
