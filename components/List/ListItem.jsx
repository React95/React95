import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from '../Icon';
import List from './List';

import rightcaret from '../../assets/pattern/rightcaret.svg';

const Item = styled.li`
  position: relative;

  display: flex;
  align-items: center;
  margin: 0;
  padding: 2px 6px;

  i {
    margin-right: 10px;
  }

  &:hover {
    background-color: #00007f;
    color: white;
  }

  ul {
    display: none;
    position: absolute;
    top: -2px;
    left: 97%;
    color: #000;

    i {
      width: 18px;
      height: 20px;
      margin-right: 6px;
    }
  }

  svg {
    fill: white;
  }

  ${({ icon }) => !icon && 'padding-left: 26px;'};

  ${({ hasList }) => hasList
    && `
    &:after {
      position: absolute;
      content: '';
      background-color: #000;
      mask-image: url('${rightcaret}');
      mask-position: center center;
      mask-size: 5px 8px;
      mask-repeat: no-repeat;
      width: 5px;
      height: 8px;
      right: 8px;
    }

    &:hover {
      &:after {
        background-color: #FFF;
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
    hasList={React.Children.map(
      children,
      children => children.type === List
    ).some(child => child)}
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
