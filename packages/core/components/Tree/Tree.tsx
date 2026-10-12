import { forwardRef, useEffect, useState } from 'react';
import type {
  ForwardRefExoticComponent,
  HTMLAttributes,
  RefAttributes,
} from 'react';
import cn from 'classnames';

import { Node, icons, NodeProps, NodeRoot } from './Node';
import { tree } from './Tree.css';
import { Frame, FrameProps } from '../Frame/Frame';

export type TreeProps = {
  data: Array<NodeProps>;
  root?: Omit<NodeProps, 'children'>;
} & FrameProps &
  HTMLAttributes<HTMLUListElement>;

const hasTreeItemKey = (data: Array<NodeProps>, key: string | null) => {
  if (key === null) {
    return false;
  }

  let nodes = data;

  return key.split('.').every(index => {
    const node = nodes[Number(index)];

    if (!node) {
      return false;
    }

    nodes = node.children ?? [];
    return true;
  });
};

type TreeComposition = ForwardRefExoticComponent<
  TreeProps & RefAttributes<HTMLUListElement>
> & {
  icons: typeof icons;
} & Omit<FrameProps, 'as'>;

export const Tree = forwardRef<HTMLUListElement, TreeProps>(
  ({ data = [], root, ...rest }, ref) => {
    const [activeTreeItemKey, setActiveTreeItemKey] = useState<string | null>(
      () => (data.length ? '0' : null),
    );
    const resolvedActiveTreeItemKey = hasTreeItemKey(data, activeTreeItemKey)
      ? activeTreeItemKey
      : data.length
        ? '0'
        : null;

    useEffect(() => {
      if (activeTreeItemKey !== resolvedActiveTreeItemKey) {
        setActiveTreeItemKey(resolvedActiveTreeItemKey);
      }
    }, [activeTreeItemKey, data, resolvedActiveTreeItemKey]);

    return (
      <>
        {root && <NodeRoot {...root} />}
        <Frame
          {...rest}
          className={cn(tree, rest.className)}
          as="ul"
          role="tree"
          ref={ref}
        >
          {data.map((dataNode, index) => (
            <Node
              key={dataNode.id}
              {...dataNode}
              treeItemKey={`${index}`}
              activeTreeItemKey={resolvedActiveTreeItemKey}
              onActiveTreeItemChange={setActiveTreeItemKey}
            />
          ))}
        </Frame>
      </>
    );
  },
) as TreeComposition;

Tree.icons = icons;
