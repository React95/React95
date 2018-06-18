import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ListItem from './ListItem';
import Divider from './ListDivider';
import Icon from '../Icon';

import Btn from '../shared-style/Btn';

const List = Btn.withComponent('ul').extend`
  margin: 0;
  padding: 0;
  list-style: none;

  ${({ width }) => `
    width: ${width}px;
  `}

  &:focus {
    outline: none;
    box-shadow: none;
  }

  &:active {
    box-shadow: none;
  }
`;

List.defaultProps = {
  width: 200,
};

List.Icon = Icon;
List.Item = ListItem;
List.Divider = Divider;

export default List;
