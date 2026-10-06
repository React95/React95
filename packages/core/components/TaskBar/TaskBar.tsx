import { forwardRef, useState } from 'react';
import type { HTMLAttributes, ReactElement } from 'react';

import { Frame, FrameProps } from '../Frame/Frame';
import { List } from '../List/List';

import { Clock } from './Clock';
import { WindowButton } from './WindowButton';
import { Logo } from '@react95/icons';
import { truncate } from './TaskBar.css';
import { useModalWindows } from './useModalWindows';

export type TaskBarProps = {
  list?: ReactElement<typeof List>;
} & HTMLAttributes<HTMLDivElement> &
  FrameProps;

export const TaskBar = forwardRef<HTMLDivElement, TaskBarProps>(
  ({ list, className }, ref) => {
    const [showList, toggleShowList] = useState(false);
    const [activeStart, toggleActiveStart] = useState(false);
    const { windows, activeWindow, toggleWindow } = useModalWindows();

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
        className={className}
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
          {windows.map(
            ({ icon, title, hasButton, id }) =>
              hasButton && (
                <WindowButton
                  key={id}
                  icon={icon}
                  active={id === activeWindow}
                  onClick={() => toggleWindow(id)}
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
