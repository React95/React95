import React, { forwardRef } from 'react';
import styled from 'styled-components';
import Node, { icons, NodeProps } from './Node';

const TreeParent = styled.ul`
  padding: 0;
`;

export type TreeProps = {
  data: Array<NodeProps>;
};

type TreeComposition = React.ForwardRefExoticComponent<
  TreeProps & React.RefAttributes<HTMLUListElement>
> & {
  icons: typeof icons;
};

const Tree = forwardRef<HTMLUListElement, TreeProps>(
  ({ data, ...rest }, ref) => (
    <TreeParent {...rest} ref={ref}>
      {data.map(dataNode => (
        <Node key={dataNode.id} {...dataNode} />
      ))}
    </TreeParent>
  ),
) as TreeComposition;

Tree.defaultProps = {
  data: [],
};

Tree.icons = icons;

export default Tree;
