import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from '../Icon';

const Item = styled.li`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 2px 6px;

  i {
    margin-right: 10px;
  }
`;

export default Item;
