import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Node, { icons } from './Node';

const TreeParent = styled.ul`
  padding: 0px;
`;

const Tree = ({ data, ...rest }) => (
  <TreeParent {...rest}>
    {data.map(dataNode => (
      <Node key={dataNode.id} {...dataNode} />
    ))}
  </TreeParent>
);

Tree.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(Node.propTypes)),
};

Tree.defaultProps = {
  data: [],
};

Tree.icons = icons;

export default Tree;
