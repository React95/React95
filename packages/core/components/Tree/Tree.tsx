import React, { forwardRef } from 'react';
import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import cn from 'classnames';

import { Node, icons, NodeProps, NodeRoot } from './Node';
import { tree } from './Tree.css';
import { Frame, FrameProps } from '../Frame/Frame';

export type TreeProps = {
  data: Array<NodeProps>;
  root?: Omit<NodeProps, 'children'>;
} & FrameProps<'ul'>;

type TreeComposition = ForwardRefExoticComponent<
  TreeProps & RefAttributes<HTMLUListElement>
> & {
  icons: typeof icons;
} & Omit<FrameProps<'ul'>, 'as'>;

export const Tree = forwardRef<HTMLUListElement, TreeProps>(
  ({ data = [], root, ...rest }, ref) => {
    return (
      <>
        {root && <NodeRoot {...root} />}
        <Frame {...rest} className={cn(tree, rest.className)} as="ul" ref={ref}>
          {data.map(dataNode => (
            <Node key={dataNode.id} {...dataNode} />
          ))}
        </Frame>
      </>
    );
  },
) as TreeComposition;

Tree.icons = icons;
