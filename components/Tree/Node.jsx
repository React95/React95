import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
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

const NodeItem = styled.div`
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
  border: 1px solid black;
  background-color: white;
  font-size: 11px;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  margin-right: 6px;
  margin-left: ${props => (props.hasChildren ? 8 : 18)}px;
`;

const NodeChildren = styled.ul`
  padding: 0px 0px 0px 22px;
  background-image: url(${treeNodeChildrenLine});
  background-repeat: repeat-y;
`;

const Node = ({ children, id, iconName, label, onClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = children.length > 0;

  function getIconName() {
    return !hasChildren
      ? iconName || icons.FILE_UNKNOWN
      : isOpen
      ? FOLDER_OPENED
      : FOLDER_CLOSED;
  }

  return (
    <NodeItem isOpen={isOpen}>
      <NodeInfo>
        {hasChildren && (
          <FolderStatus onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? '-' : '+'}
          </FolderStatus>
        )}
        <IconContainer hasChildren={hasChildren}>
          <Icon name={getIconName()} width={14} height={14} />
        </IconContainer>
        <span
          onDoubleClick={() => setIsOpen(!isOpen)}
          onClick={event =>
            onClick(event, {
              id,
              iconName,
              label,
              children,
            })
          }
        >
          {label}
        </span>
      </NodeInfo>
      {hasChildren && isOpen && (
        <NodeChildren>
          {React.Children.map(children, dataNode => (
            <Node key={dataNode.id} {...dataNode} />
          ))}
        </NodeChildren>
      )}
    </NodeItem>
  );
};

Node.defaultProps = {
  label: '',
  iconName: null,
  children: [],
  id: null,
  onClick: () => {},
};

Node.propTypes = {
  label: PropTypes.string,
  iconName: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  id: PropTypes.string,
  onClick: PropTypes.func,
};

export default Node;
