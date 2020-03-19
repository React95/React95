import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from '@xstyled/styled-components';
import { th } from '@xstyled/system';

import Icon from '../Icon';
import List from './List';

import rightcaret from '../shared/assets/pattern/rightcaret.svg';

const Item = styled.li`
  position: relative;

  display: flex;
  align-items: center;
  margin: 0;
  padding: 2 6;

  i {
    margin-right: 10;
  }

  &:hover {
    background-color: primary;
    color: ${th('colors.white')};
  }

  ul {
    display: none;
    position: absolute;
    top: -2px;
    left: 97%;
    color: ${th('colors.black')};

    i {
      width: 18px;
      height: 20px;
      margin-right: 6;
    }
  }

  svg {
    fill: ${th('colors.white')};
  }

  ${({ icon }) => !icon && 'padding-left: 26px;'};

  ${({ hasList }) =>
    hasList &&
    css`
      &:after {
        position: absolute;
        width: 5px;
        height: 8px;
        right: 8px;

        content: '';
        background-color: ${th('colors.black')};
        mask-image: url('${rightcaret}');
        mask-position: center center;
        mask-size: 5px 8px;
        mask-repeat: no-repeat;
      }

      &:hover {
        &:after {
          background-color: ${th('colors.white')};
        }

        ul {
          display: block;
        }
      }
    `};
`;

const ListItem = ({ icon, children, onClick, ...rest }) => (
  <Item
    {...rest}
    onClick={onClick}
    icon={icon}
    hasList={React.Children.map(children, child => child.type === List).some(
      child => child,
    )}
  >
    {icon && <Icon name={icon} />}
    {children}
  </Item>
);

ListItem.propTypes = {
  icon: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

ListItem.defaultProps = {
  icon: '',
  onClick: () => {},
};

export default ListItem;
