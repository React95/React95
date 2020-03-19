import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from '@xstyled/styled-components';
import { th } from '@xstyled/system';

const NavItem = styled.li`
  list-style: none;
  padding: 3 6;
  background-color: bg;
  box-shadow: inset 0 1px 0 0 ${th('colors.white')},
    -2px 1px 0 -1px ${th('colors.grays.2')},
    -3px 1px 0 -1px ${th('colors.white')}, -2px 0 0 -1px ${th('colors.white')},
    2px 1px 0 -1px ${th('colors.grays.3')}, 2px 0 0 -1px ${th('colors.black')},
    3px 1px 0 -1px ${th('colors.black')};
  margin-right: 2;
  margin-left: 2;

  &:first-child {
    margin-left: 4;
  }

  ${props =>
    props.active &&
    css`
      margin-top: -${th('space.2')}px;
      margin-left: -${th('space.2')}px;
      margin-bottom: 1;

      &:first-child {
        margin-left: 2;
      }

      box-shadow: inset 0 1px 0 0 ${th('colors.white')},
        -2px 1px 0 -1px ${th('colors.grays.2')},
        -0.5px 3px 0 0.5px ${th('colors.grays.2')},
        -2px 2px 0 0 ${th('colors.white')}, -2px 0 0 -1px ${th('colors.white')},
        1px 2px 0 0 ${th('colors.grays.3')}, 2px 0 0 -1px ${th('colors.black')},
        2px 2px 0 0 ${th('colors.black')};

      & + li {
        margin-left: 0;
        box-shadow: inset 0 1px 0 0 ${th('colors.white')},
          2px 1px 0 -1px ${th('colors.grays.3')},
          2px 0 0 -1px ${th('colors.black')},
          3px 1px 0 -1px ${th('colors.black')};
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
  title: PropTypes.string.isRequired,
};

Tab.defaultProps = {
  activeTab: undefined,
};

export default Tab;
