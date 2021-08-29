import React from 'react';
import { Frame, Modal, Tree } from '@react95/core';
import * as R95Icons from '@react95/icons';
import styled from '@xstyled/styled-components';

import { isEmpty } from '../utils';

const Name = styled.span`
  word-break: break-word;

  padding: 2px;

  border: 1px dotted;
  border-color: transparent;
`;

const StyledFrame = styled(Frame)`
  text-align: center;
  position: relative;

  :focus {
    ${Frame}:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;

      background-color: headerBackground;

      opacity: 0.5;
    }

    ${Name} {
      background-color: headerBackground;
      color: headerText;
      border-color: headerText;
    }
  }
`;

export const Shortcut = ({ name, ...rest }) => (
  <StyledFrame
    display="inline-flex"
    justifyContent="flex-start"
    alignItems="center"
    flexDirection="column"
    boxShadow="none"
    width="60px"
    bg="transparent"
    margin={12}
    tabIndex="0"
    {...rest}
  >
    <Frame mb={4} position="relative" boxShadow="none" bg="transparent">
      <R95Icons.Explorer101 variant="32x32_4" />
    </Frame>
    <Name>{name}</Name>
  </StyledFrame>
);

function getTreeData(nav) {
  return Object.values(nav).map(({ slug, icon = {}, title, ...restNavs }) => {
    const IconRenderer = R95Icons[icon?.name] || R95Icons.BatExec;
    const variant = icon?.variant || undefined;

    const node = {
      label: title,
      id: slug,
      icon: <IconRenderer variant={variant} />,
    };

    if (!isEmpty(restNavs)) {
      const data = getTreeData(restNavs);

      return {
        ...node,
        children: data,
      };
    }

    return node;
  });
}

const ExplorerModal = ({ nav, closeModal }) => {
  const treeData = getTreeData(nav);

  return (
    <Modal
      defaultPosition={{ x: 50, y: 50 }}
      width="300"
      height="500"
      icon={<R95Icons.Explorer101 variant="16x16_4" />}
      title="Explorer"
      closeModal={closeModal}
    >
      <Frame
        bg="white"
        width={200}
        height="100%"
        boxShadow="in"
        pl="1em"
        pr="1em"
      >
        <Tree data={treeData} />
      </Frame>
    </Modal>
  );
};

const ContentExplorer = ({ nav }) => {
  const [isOpenned, toggleOpenned] = React.useState(false);

  return (
    <>
      <Shortcut
        name="Explorer"
        onDoubleClick={() => toggleOpenned(true)}
        role="button"
      />

      {isOpenned && (
        <ExplorerModal nav={nav} closeModal={() => toggleOpenned(false)} />
      )}
    </>
  );
};

export default ContentExplorer;
