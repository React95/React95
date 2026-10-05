import { useEffect, useRef, useState } from 'react';
import type {
  ReactElement,
  MouseEvent,
  KeyboardEvent,
  FocusEvent,
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
} & Omit<LiHTMLAttributes<HTMLLIElement>, 'id' | 'children' | 'onClick'>;

export type NodeRootProps = NodeBaseProps & {
  onClick?(event: MouseEvent | KeyboardEvent, props: NodeRootProps): void;
};

const EMPTY_CHILDREN: Array<NodeProps> = [];

const TREE_ITEM_SELECTOR = '[role="treeitem"]';

const getTreeItems = (item: HTMLLIElement) => {
  const tree = item.closest('[role="tree"]');

  return tree
    ? Array.from(tree.querySelectorAll<HTMLLIElement>(TREE_ITEM_SELECTOR))
    : [];
};

const setActiveTreeItem = (item: HTMLLIElement) => {
  getTreeItems(item).forEach(treeItem => {
    treeItem.tabIndex = treeItem === item ? 0 : -1;
  });
};

const focusTreeItem = (item: HTMLLIElement) => {
  setActiveTreeItem(item);
  item.focus();
};

export const Node = ({
  children = EMPTY_CHILDREN,
  id,
  icon,
  label,
  onClick = () => {},
  ...rest
}: NodeProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const nodeRef = useRef<HTMLLIElement>(null);
  const hasChildren = children.length > 0;

  useEffect(() => {
    const node = nodeRef.current;
    const tree = node?.closest('[role="tree"]');

    if (
      node &&
      tree &&
      !tree.querySelector(`${TREE_ITEM_SELECTOR}[tabindex="0"]`)
    ) {
      node.tabIndex = 0;
    }
  }, []);

  const onClickHandler = (event: MouseEvent | KeyboardEvent) => {
    if (nodeRef.current) {
      setActiveTreeItem(nodeRef.current);
      nodeRef.current.focus();
    }

    onClick(event, {
      id,
      icon,
      label,
      children,
    });
  };

  const onKeyDownHandler = (event: KeyboardEvent<HTMLLIElement>) => {
    const node = nodeRef.current;

    if (!node) {
      return;
    }

    if (
      [
        'ArrowDown',
        'ArrowUp',
        'ArrowRight',
        'ArrowLeft',
        'Enter',
        '+',
        '-',
        ' ',
      ].includes(event.key)
    ) {
      event.stopPropagation();
    }

    const treeItems = getTreeItems(node);
    const currentIndex = treeItems.indexOf(node);

    switch (event.key) {
      case 'ArrowDown': {
        const nextNode = treeItems[currentIndex + 1];

        if (nextNode) {
          event.preventDefault();
          focusTreeItem(nextNode);
        }
        break;
      }
      case 'ArrowUp': {
        const previousNode = treeItems[currentIndex - 1];

        if (previousNode) {
          event.preventDefault();
          focusTreeItem(previousNode);
        }
        break;
      }
      case 'ArrowRight': {
        if (!hasChildren) {
          break;
        }

        event.preventDefault();

        if (!isOpen) {
          setIsOpen(true);
          focusTreeItem(node);
          break;
        }

        const group = node.querySelector('[role="group"]');
        const firstChild = group?.firstElementChild as HTMLLIElement | null;

        if (firstChild) {
          focusTreeItem(firstChild);
        }
        break;
      }
      case 'ArrowLeft': {
        if (isOpen) {
          event.preventDefault();
          setIsOpen(false);
          focusTreeItem(node);
          break;
        }

        const parentNode = node.parentElement?.closest(
          TREE_ITEM_SELECTOR,
        ) as HTMLLIElement | null;

        if (parentNode) {
          event.preventDefault();
          focusTreeItem(parentNode);
        }
        break;
      }
      case 'Enter':
        event.preventDefault();
        onClickHandler(event);
        break;
      case '+':
        if (hasChildren) {
          event.preventDefault();
          setIsOpen(true);
        }
        break;
      case '-':
        if (hasChildren) {
          event.preventDefault();
          setIsOpen(false);
        }
        break;
      case ' ':
        event.preventDefault();
        setIsOpen(!isOpen);
        onClickHandler(event);
        break;
    }
  };

  const onDoubleClickHandler = (event: MouseEvent<HTMLLIElement>) => {
    event.stopPropagation();

    if (hasChildren) {
      setIsOpen(!isOpen);
    }
  };

  const onFocusHandler = (event: FocusEvent<HTMLLIElement>) => {
    event.stopPropagation();

    if (nodeRef.current) {
      setActiveTreeItem(nodeRef.current);
    }
  };

  return (
    <Frame
      as="li"
      {...rest}
      ref={nodeRef}
      role="treeitem"
      aria-expanded={hasChildren ? isOpen : undefined}
      tabIndex={-1}
      className={cn(styles.node, rest.className)}
      onClick={event => {
        if (event.target === event.currentTarget) {
          onClickHandler(event);
        }
      }}
      onDoubleClick={onDoubleClickHandler}
      onFocus={onFocusHandler}
      onKeyDown={onKeyDownHandler}
    >
      <div className={styles.nodeContent}>
        {hasChildren && (
          <div
            className={styles.folderStatus}
            aria-hidden="true"
            onClick={event => {
              event.stopPropagation();
              setIsOpen(!isOpen);
            }}
          >
            {isOpen ? '-' : '+'}
          </div>
        )}

        <div className={styles.iconContainer({ hasChildren })}>
          {icon || <NodeIcon hasChildren={hasChildren} isOpen={isOpen} />}
        </div>
        <label className={styles.label} tabIndex={-1} onClick={onClickHandler}>
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
  ...rest
}: NodeRootProps) => {
  const onClickHandler = (event: MouseEvent | KeyboardEvent) => {
    onClick(event, {
      id,
      icon,
      label,
    });
  };

  const onKeyDownHandler = (event: KeyboardEvent) => {
    if (event.key === ' ') {
      onClickHandler(event);
    }
  };

  return (
    <Frame {...rest} className={cn(styles.node, styles.nodeRoot)}>
      <div className={styles.nodeContent}>
        <div
          className={cn(
            styles.iconContainer.classNames.base,
            styles.iconContainer.classNames.variants.hasChildren.true,
          )}
        >
          {icon || <NodeIcon hasChildren={false} isOpen={true} />}
        </div>
        <label
          className={styles.label}
          tabIndex={0}
          onClick={onClickHandler}
          onKeyDown={onKeyDownHandler}
        >
          {label}
        </label>
      </div>
    </Frame>
  );
};
