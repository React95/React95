import { useContext, useEffect, useId, useState } from 'react';
import type {
  ReactElement,
  ReactNode,
  MouseEvent,
  KeyboardEvent,
  LiHTMLAttributes,
} from 'react';

import {
  Bat,
  BatExec,
  FileFont2,
  FilePen,
  FileSettings,
  FileText,
  FileTextSettings,
  Folder,
  FolderOpen,
  MediaCd,
} from '@react95/icons';
import * as styles from './Tree.css';
import { Frame, FrameProps } from '../Frame/Frame';
import { TreeNavContext } from './TreeNav';
import cn from 'classnames';

export const icons = {
  FILE_MEDIA: MediaCd,
  FILE_TEXT: FileText,
  FILE_UNKNOWN: Bat,
  FILE_FONT: FileFont2,
  FILE_PEN: FilePen,
  FILE_SETTINGS: FileSettings,
  FILE_TEXT_SETTINGS: FileTextSettings,
  FILE_EXECUTABLE: BatExec,
} as const;

const NodeIcon = ({
  hasChildren,
  isOpen,
}: {
  hasChildren: boolean;
  isOpen: boolean;
}) => {
  if (!hasChildren) {
    return <Bat variant="16x16_4" data-testid="react95-default-icon-bat" />;
  }

  if (isOpen) {
    return (
      <FolderOpen
        variant="16x16_4"
        data-testid="react95-default-icon-folder-open"
      />
    );
  }

  return <Folder variant="16x16_4" data-testid="react95-default-icon-folder" />;
};

type NodeBaseProps = {
  label: string;
  icon?: ReactElement;
  id: number;
} & Omit<FrameProps, 'id' | 'children'>;

export type NodeProps = NodeBaseProps & {
  children?: Array<NodeProps>;
  onClick?(event: MouseEvent | KeyboardEvent, props: NodeProps): void;
} & Omit<LiHTMLAttributes<HTMLLIElement>, 'id' | 'children'>;

export type NodeRootProps = NodeBaseProps & {
  onClick?(event: MouseEvent | KeyboardEvent, props: NodeRootProps): void;
  /** the tree's nodes, rendered in the root's group */
  children?: ReactNode;
} & Omit<LiHTMLAttributes<HTMLLIElement>, 'id' | 'children'>;

const EMPTY_CHILDREN: Array<NodeProps> = [];

export const Node = ({
  children = EMPTY_CHILDREN,
  id,
  icon,
  label,
  onClick = () => {},
  ...rest
}: NodeProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = children.length > 0;
  const nav = useContext(TreeNavContext);
  // node ids aren't guaranteed unique (and the same Node can appear in
  // several trees), so keyboard navigation tracks instances by this id;
  // it only lands in data-uid, so the raw useId value is fine
  const uid = useId();

  const onClickHandler = (event: MouseEvent | KeyboardEvent) => {
    onClick(event, {
      id,
      icon,
      label,
      children,
    });
  };

  // expose this node to the tree's keyboard navigation (toggling folders
  // and keyboard activation live on the tree root, per the WAI-ARIA
  // treeview pattern)
  useEffect(() => {
    nav?.register(uid, {
      toggle: hasChildren ? () => setIsOpen(open => !open) : null,
      activate: event => onClickHandler(event),
    });
    return () => {
      nav?.unregister(uid);
    };
  }, [nav, uid, hasChildren, icon, label, children, onClick]);

  return (
    <Frame
      as="li"
      {...rest}
      role="treeitem"
      aria-expanded={hasChildren ? isOpen : undefined}
      data-uid={uid}
      tabIndex={nav ? (nav.tabbableUid === uid ? 0 : -1) : 0}
      className={cn(styles.node, rest.className)}
    >
      <div className={styles.nodeContent}>
        {hasChildren && (
          <div
            className={styles.folderStatus}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? '-' : '+'}
          </div>
        )}

        <div className={styles.iconContainer({ hasChildren })}>
          {icon || <NodeIcon hasChildren={hasChildren} isOpen={isOpen} />}
        </div>
        <label
          className={styles.label}
          onDoubleClick={() => setIsOpen(!isOpen)}
          onClick={onClickHandler}
        >
          {label}
        </label>
      </div>
      {hasChildren && isOpen && (
        <ul className={styles.tree} role="group">
          {children?.map(dataNode => (
            <Node key={dataNode.id} {...dataNode} />
          ))}
        </ul>
      )}
    </Frame>
  );
};

export const NodeRoot = ({
  id,
  icon,
  label,
  onClick = () => {},
  children,
  ...rest
}: NodeRootProps) => {
  const nav = useContext(TreeNavContext);
  // like Node, the root gets a stable id for the tree's keyboard
  // navigation. It is always expanded and never collapses, so its toggle
  // stays null; Enter/Space run its onClick through activate
  const uid = useId();

  const onClickHandler = (event: MouseEvent | KeyboardEvent) => {
    onClick(event, {
      id,
      icon,
      label,
    });
  };

  useEffect(() => {
    nav?.register(uid, {
      toggle: null,
      activate: event => onClickHandler(event),
    });
    return () => {
      nav?.unregister(uid);
    };
  }, [nav, uid, icon, label, onClick]);

  return (
    <Frame
      as="li"
      {...rest}
      role="treeitem"
      aria-expanded="true"
      data-uid={uid}
      tabIndex={nav ? (nav.tabbableUid === uid ? 0 : -1) : 0}
      className={cn(styles.nodeRoot, rest.className)}
    >
      <div className={styles.nodeContent}>
        <div
          className={cn(
            styles.iconContainer.classNames.base,
            styles.iconContainer.classNames.variants.hasChildren.true,
          )}
        >
          {icon || <NodeIcon hasChildren={false} isOpen={true} />}
        </div>
        <label className={styles.label} onClick={onClickHandler}>
          {label}
        </label>
      </div>
      {children}
    </Frame>
  );
};
