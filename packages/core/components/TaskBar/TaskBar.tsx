import React, { forwardRef, useContext, useState } from 'react';

import { ModalContext } from '../Modal';
import Frame from '../Frame';
import List from '../List';

import { Clock } from './Clock';
import { WindowButton } from './WindowButton';
import { Logo } from '@react95/icons';
import { truncate } from './TaskBar.css';

export type TaskBarProps = {
  list?: React.ReactElement<typeof List>;
};

export const TaskBar = forwardRef<HTMLDivElement, TaskBarProps>(
  ({ list }, ref) => {
    const [showList, toggleShowList] = useState(false);
    const [activeStart, toggleActiveStart] = useState(false);
    const { windows, activeWindow, setActiveWindow } = useContext(ModalContext);

    return (
      <Frame
        position="fixed"
        bottom="0px"
        left="0px"
        right="0px"
        display="flex"
        justifyContent="space-between"
        h="28px"
        w="100%"
        padding="$2"
        zIndex="$taskbar"
        backgroundColor="$material"
        boxShadow="$out"
        ref={ref}
      >
        {showList && (
          <Frame
            position="absolute"
            bottom="28px"
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
          icon={<Logo variant="32x32_4" />}
          active={activeStart}
          onClick={() => {
            toggleActiveStart(!activeStart);
            toggleShowList(!showList);
          }}
        >
          Start
        </WindowButton>

        <Frame w="100%" paddingLeft="$0" ml="$2" display="flex">
          {Object.entries(windows).map(
            ([windowId, { icon, title, hasButton }]) =>
              hasButton && (
                <WindowButton
                  key={windowId}
                  icon={icon}
                  active={windowId === activeWindow}
                  onClick={() => setActiveWindow(windowId)}
                  small={false}
                >
                  <div className={truncate}>{title}</div>
                </WindowButton>
              ),
          )}
        </Frame>

        <Clock />
      </Frame>
    );
  },
);
