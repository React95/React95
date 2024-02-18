import * as React from 'react';

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

const NodeIcon: React.FC<{ hasChildren: boolean; isOpen: boolean }> = ({
  hasChildren,
  isOpen,
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

export type NodeProps = {
  label: string;
  icon?: React.ReactElement;
  id: number;
  children?: Array<NodeProps>;
  onClick?(
    event: React.MouseEvent | React.KeyboardEvent,
    props: NodeProps,
  ): void;
} & Omit<FrameProps, 'id' | 'children'>;

export type NodeRootProps = Omit<NodeProps, 'children'>;

const Node: React.FC<NodeProps> = ({
  children = [],
  id,
  icon,
  label,
  onClick = () => {},
  ...rest
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const hasChildren = children.length > 0;

  const onClickHandler = (event: React.MouseEvent | React.KeyboardEvent) => {
    onClick(event, {
      id,
      icon,
      label,
      children,
    });
  };

  const onKeyDownHandler = (event: React.KeyboardEvent) => {
    if (event.key === ' ') {
      setIsOpen(!isOpen);
      onClickHandler(event);
    }
  };

  return (
    <Frame as="li" {...rest} className={styles.node}>
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
          tabIndex={0}
          onDoubleClick={() => setIsOpen(!isOpen)}
          onClick={onClickHandler}
          onKeyDown={onKeyDownHandler}
        >
          {label}
        </label>
      </div>
      {hasChildren && isOpen && (
        <menu className={styles.tree}>
          {children?.map(dataNode => (
            <Node key={dataNode.id} {...dataNode} />
          ))}
        </menu>
      )}
    </Frame>
  );
};

export const NodeRoot: React.FC<NodeRootProps> = ({
  id,
  icon,
  label,
  onClick = () => {},
  ...rest
}) => {
  const onClickHandler = (event: React.MouseEvent | React.KeyboardEvent) => {
    onClick(event, {
      id,
      icon,
      label,
    });
  };

  const onKeyDownHandler = (event: React.KeyboardEvent) => {
    if (event.key === ' ') {
      onClickHandler(event);
    }
  };

  return (
    <Frame as="p" {...rest} className={cn(styles.node, styles.nodeRoot)}>
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

export default Node;
