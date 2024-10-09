import React, { forwardRef, useEffect, useState } from 'react';
import type { ReactElement } from 'react';

import { Frame } from '../Frame/Frame';
import { List } from '../List/List';

import { Clock } from './Clock';
import { WindowButton } from './WindowButton';
import { Logo } from '@react95/icons';
import { truncate } from './TaskBar.css';
import { ModalEvents, modals, ModalWindow } from '../shared/events';

export type TaskBarProps = {
  list?: ReactElement<typeof List>;
};

export const TaskBar = forwardRef<HTMLDivElement, TaskBarProps>(
  ({ list }, ref) => {
    const [showList, toggleShowList] = useState(false);
    const [activeStart, toggleActiveStart] = useState(false);
    const [modalWindows, setModalWindows] = React.useState<ModalWindow[]>([]);
    const [activeWindow, setActiveWindow] = useState<string>();

    useEffect(() => {
      const addModal = (window: ModalWindow) => {
        setModalWindows(prevModals => [...prevModals, window]);
      };
      const removeModal = (data: Pick<ModalWindow, 'id'>) => {
        setModalWindows(prevModals => {
          const filteredModals = prevModals.filter(
            modal => modal.id !== data.id,
          );

          const lastModal = filteredModals.at(-1);

          if (!activeWindow && lastModal) {
            modals.emit(ModalEvents.ModalVisibilityChanged, {
              id: lastModal?.id,
            });
          }

          return filteredModals;
        });
      };

      const updateVisibleModal = ({ id }: Pick<ModalWindow, 'id'>) => {
        setActiveWindow(id);
      };

      modals.on(ModalEvents.AddModal, addModal);
      modals.on(ModalEvents.RemoveModal, removeModal);
      modals.on(ModalEvents.ModalVisibilityChanged, updateVisibleModal);

      return () => {
        modals.off(ModalEvents.AddModal, addModal);
        modals.off(ModalEvents.RemoveModal, removeModal);
        modals.off(ModalEvents.ModalVisibilityChanged, updateVisibleModal);
      };
    }, []);

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
          {modalWindows.map(
            ({ icon, title, hasButton, id }) =>
              hasButton && (
                <WindowButton
                  key={id}
                  icon={icon}
                  active={id === activeWindow}
                  onClick={() => {
                    if (id === activeWindow) {
                      modals.emit(ModalEvents.MinimizeModal, { id });
                      setActiveWindow('Minimize');
                    } else {
                      modals.emit(ModalEvents.RestoreModal, { id }); 
                      modals.emit(ModalEvents.ModalVisibilityChanged, { id });
                    }
                  }}
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
