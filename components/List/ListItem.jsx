import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from '../Icon';

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
    background-color: #00a;
    color: white;
  }

  ${({ icon }) => !icon && `padding-left: 26px;`};
`;

const ListItem = ({ icon, children, rest }) => (
  <Item {...rest} icon={icon}>
    {icon && <Icon name={icon} />}
    {children}
  </Item>
);
export default ListItem;
