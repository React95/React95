import * as React from 'react';
import styled from '@xstyled/styled-components';
import { th } from '@xstyled/system';

import Icon from '../Icon';
import treeMidLines from '../shared/assets/tree-mid.png';
import treeLastLines from '../shared/assets/tree-last.png';
import treeNodeChildrenLine from '../shared/assets/tree-node-children.png';

const FOLDER_CLOSED = 'folder';
const FOLDER_OPENED = 'folder_open';

export const icons = {
  FILE_MEDIA: 'media_cd',
  FILE_TEXT: 'file_text',
  FILE_UNKNOWN: 'bat',
  FILE_FONT: 'file_font_2',
  FILE_PEN: 'file_pen',
  FILE_SETTINGS: 'file_settings',
  FILE_TEXT_SETTINGS: 'file_text_settings',
  FILE_EXECUTABLE: 'bat_exec',
};

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
  border-color: ${th('colors.black')};
  background-color: ${th('colors.white')};
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

export type NodeProps = {
  label: string;
  iconName?: string;
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
  iconName,
  label,
  onClick = () => {},
  ...rest
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const hasChildren = children.length > 0;

  function getIconName(): string {
    if (!hasChildren) {
      return iconName || icons.FILE_UNKNOWN;
    }

    if (isOpen) {
      return FOLDER_OPENED;
    }

    return FOLDER_CLOSED;
  }

  const onClickHandler = (event: React.MouseEvent | React.KeyboardEvent) => {
    onClick(event, {
      id,
      iconName,
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
          <Icon name={getIconName()} width={14} height={14} />
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
