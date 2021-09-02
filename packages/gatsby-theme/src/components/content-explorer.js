import React from 'react';
import { Link, navigate } from 'gatsby';
import { Frame, Modal, Tree } from '@react95/core';
import * as R95Icons from '@react95/icons';
import styled from '@xstyled/styled-components';

import { isEmpty, isMobile } from '../utils';
import { TASKBAR_HEIGHT } from '../utils/constants';

import IconRenderer from './icon-renderer';

function getTreeData(nav, select) {
  return Object.values(nav).map(({ slug, icon = {}, title, ...restNavs }) => {
    const node = {
      label: title,
      id: slug,
      icon: <IconRenderer {...icon} />,
    };

    if (!isEmpty(restNavs)) {
      const data = getTreeData(restNavs);

      return {
        ...node,
        onClick: () => select({ title, data }),
        children: data,
      };
    }

    return { ...node, onClick: () => navigate(`/${slug}`) };
  });
}

const Name = styled.span`
  word-break: break-word;

  padding: 2px;

  border: 1px dotted;
  border-color: transparent;
`;

const StyledFrame = styled(({ children, to, ...rest }) => (
  <Frame {...rest}>
    <Link to={to}>{children}</Link>
  </Frame>
))`
  text-align: center;
  position: relative;

  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }

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

export const Shortcut = ({
  label,
  icon: Icon = <R95Icons.Explorer101 variant="32x32_4" />,
  id: slug,
  ...rest
}) => (
  <StyledFrame
    display="inline-block"
    justifyContent="flex-start"
    alignItems="center"
    flexDirection="column"
    boxShadow="none"
    width="60px"
    bg="transparent"
    margin={12}
    tabIndex="0"
    {...(slug && {
      to: `/${slug}`,
    })}
    {...rest}
  >
    <Frame
      mb={4}
      position="relative"
      boxShadow="none"
      bg="transparent"
      minHeight={34}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {Icon}
    </Frame>
    <Name>{label}</Name>
  </StyledFrame>
);

const FrameWrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 6;
`;

const boxProps = {
  height: isMobile ? `calc(100% - ${TASKBAR_HEIGHT}px)` : 500,
  width: isMobile ? '100%' : 500,
};

const ExplorerModal = ({ nav, closeModal }) => {
  const [selectedFolder, setSelectedFolder] = React.useState({ data: [] });
  const treeData = getTreeData(nav, setSelectedFolder);

  return (
    <Modal
      width="500"
      height="500"
      icon={<R95Icons.Explorer101 variant="16x16_4" />}
      title="Explorer"
      closeModal={closeModal}
      style={{ top: 0, ...boxProps }}
    >
      <FrameWrapper>
        <Frame bg="white" boxShadow="in" pl="1em" pr="1em">
          <Tree data={treeData} />
        </Frame>

        <Frame bg="white" boxShadow="in">
          {selectedFolder.data.map(content => (
            <Shortcut {...content} />
          ))}
        </Frame>
      </FrameWrapper>
      <Frame p={2} mt={6} boxShadow="in">{`${
        Object.keys(nav).length
      } objects(s)`}</Frame>
    </Modal>
  );
};

const ContentExplorer = ({ nav }) => {
  const [isOpenned, toggleOpenned] = React.useState(false);

  return (
    <>
      <Shortcut
        label="Explorer"
        onClick={() => toggleOpenned(true)}
        role="button"
      />

      {isOpenned && (
        <ExplorerModal nav={nav} closeModal={() => toggleOpenned(false)} />
      )}
    </>
  );
};

export default ContentExplorer;
