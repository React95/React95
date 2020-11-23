/* eslint-disable react/no-array-index-key */
import * as React from 'react';
import styled from '@xstyled/styled-components';

import { ModalContext } from '../Modal';
import Frame from '../Frame';
import List from '../List';

import Clock from './Clock';
import WindowButton from './WindowButton';

const Truncate = styled.span`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export type TaskBarProps = {
  list?: React.ReactElement<typeof List>;
};

const TaskBar: React.FC<TaskBarProps> = ({ list }) => {
  const [showList, toggleShowList] = React.useState(false);
  const [activeStart, toggleActiveStart] = React.useState(false);
  const { windows, activeWindow, setActiveWindow } = React.useContext(
    ModalContext,
  );

  return (
    <Frame
      position="fixed"
      bottom={0}
      left={0}
      right={0}
      display="flex"
      justifyContent="space-between"
      height={28}
      width="100%"
      padding={2}
      zIndex={1}
    >
      {showList && (
        <Frame
          position="absolute"
          bottom={28}
          onClick={() => {
            toggleActiveStart(false);
            toggleShowList(false);
          }}
        >
          {list}
        </Frame>
      )}
      <WindowButton
        small
        icon="logo"
        active={activeStart}
        onClick={() => {
          toggleActiveStart(!activeStart);
          toggleShowList(!showList);
        }}
      >
        Start
      </WindowButton>
      <Frame
        boxShadow="none"
        width="100%"
        paddingLeft={0}
        ml={2}
        display="flex"
      >
        {windows &&
          windows.map(({ icon, title, id }, index) => (
            <WindowButton
              key={id}
              icon={icon}
              active={id === activeWindow}
              onClick={() => setActiveWindow(id)}
              small={false}
            >
              <Truncate>{title}</Truncate>
            </WindowButton>
          ))}
      </Frame>

      <Clock />
    </Frame>
  );
};

TaskBar.defaultProps = {
  list: undefined,
};

export default TaskBar;
