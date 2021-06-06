import * as React from 'react';
import styled from '@xstyled/styled-components';

import treeMidLines from './imgs/tree-mid.png';
import treeLastLines from './imgs/tree-last.png';
import treeNodeChildrenLine from './imgs/tree-node-children.png';
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

const NodeItem = styled.div<{ isOpen: boolean }>`
  list-style-type: none;
  background-repeat: no-repeat;
  background-image: url(${treeMidLines});

  &:last-child {
    background-image: url(${({ isOpen }) =>
      isOpen ? treeMidLines : treeLastLines});
  }
`;

const NodeInfo = styled.div`
  display: flex;
  align-items: center;
  user-select: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
`;

const FolderStatus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10px;
  height: 10px;
  border: 1;
  border-color: borderDarkest;
  background-color: inputBackground;
  font-size: 11px;
`;

const IconContainer = styled.div<{ hasChildren: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  margin-right: 6;
  margin-left: ${({ hasChildren }) => (hasChildren ? 8 : 18)}px;

  > img {
    width: 14px;
    height: 14px;
  }
`;

const NodeChildren = styled.ul`
  padding: 0 0 0 22;
  background-image: url(${treeNodeChildrenLine});
  background-repeat: repeat-y;
`;

const Label = styled.span`
  outline: none;
  padding: 1;

  :focus {
    border-width: 1;
    border-style: dotted;
    padding: 0;
  }
`;

const NodeIcon: React.FC<{ hasChildren: boolean; isOpen: boolean }> = ({
  hasChildren,
  isOpen,
}) => {
  if (!hasChildren) {
    return <Bat variant="32x32_4" data-testid="react95-default-icon-bat" />;
  }

  if (isOpen) {
    return (
      <FolderOpen
        variant="32x32_4"
        data-testid="react95-default-icon-folder-open"
      />
    );
  }

  return <Folder variant="32x32_4" data-testid="react95-default-icon-folder" />;
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
};

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
    <NodeItem isOpen={isOpen} {...rest}>
      <NodeInfo>
        {hasChildren && (
          <FolderStatus onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? '-' : '+'}
          </FolderStatus>
        )}
        <IconContainer hasChildren={hasChildren}>
          {icon || <NodeIcon hasChildren={hasChildren} isOpen={isOpen} />}
        </IconContainer>
        <Label
          tabIndex={0}
          onDoubleClick={() => setIsOpen(!isOpen)}
          onClick={onClickHandler}
          onKeyDown={onKeyDownHandler}
        >
          {label}
        </Label>
      </NodeInfo>
      {hasChildren && isOpen && (
        <NodeChildren>
          {children?.map(dataNode => (
            <Node key={dataNode.id} {...dataNode} />
          ))}
        </NodeChildren>
      )}
    </NodeItem>
  );
};

export default Node;
