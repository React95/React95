import React from 'react';
import styled from 'styled-components';
import Node, { icons, NodeProps } from './Node';

const TreeParent = styled.ul`
  padding: 0;
  margin: 0;
`;

export type TreeProps = {
  data: Array<NodeProps>;
};

const Tree: React.FC<TreeProps> & {
  icons: typeof icons;
} = ({ data, ...rest }) => (
  <TreeParent {...rest}>
    {data.map(dataNode => (
      <Node key={dataNode.id} {...dataNode} />
    ))}
  </TreeParent>
);

Tree.defaultProps = {
  data: [],
};

Tree.icons = icons;

export default Tree;
