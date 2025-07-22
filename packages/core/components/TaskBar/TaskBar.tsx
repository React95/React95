import React, { forwardRef, useEffect, useState } from 'react';
import type { ReactElement } from 'react';

import { Frame, FrameProps } from '../Frame/Frame';
import { List } from '../List/List';

import { Clock } from './Clock';
import { WindowButton } from './WindowButton';
import { Logo } from '@react95/icons';
import { truncate } from './TaskBar.css';
import { ModalEvents, ModalWindow, useModal } from '../shared/events';

export type TaskBarProps = {
  list?: ReactElement<typeof List>;
} & FrameProps<'div'>;

export const TaskBar = forwardRef<HTMLDivElement, TaskBarProps>(
  ({ list, className }, ref) => {
    const [showList, toggleShowList] = useState(false);
    const [activeStart, toggleActiveStart] = useState(false);
    const [modalWindows, setModalWindows] = React.useState<ModalWindow[]>([]);
    const [activeWindow, setActiveWindow] = useState<string>();
    const { minimize, restore, focus, subscribe } = useModal();

    useEffect(() => {
      const addModal = (window: ModalWindow) => {
        if (!window.id) {
          console.warn('Modal added without ID');
          return;
        }
        setModalWindows(prevModals => {
          // Prevent duplicates
          if (prevModals.some(modal => modal.id === window.id)) {
            return prevModals;
          }
          return [...prevModals, window];
        });
      };

      const removeModal = (data: Pick<ModalWindow, 'id'>) => {
        setModalWindows(prevModals => {
          const filteredModals = prevModals.filter(
            modal => modal.id !== data.id,
          );

          const lastModal = filteredModals.at(-1);

          if (activeWindow === data.id && lastModal) {
            focus(lastModal.id);
          }

          return filteredModals;
        });
      };

      const updateVisibleModal = ({ id }: Pick<ModalWindow, 'id'>) => {
        setActiveWindow(id);
      };

      const unsubscribeAdd = subscribe(ModalEvents.AddModal, addModal);
      const unsubscribeRemove = subscribe(ModalEvents.RemoveModal, removeModal);
      const unsubscribeVisibility = subscribe(
        ModalEvents.ModalVisibilityChanged,
        updateVisibleModal,
      );

      return () => {
        unsubscribeAdd();
        unsubscribeRemove();
        unsubscribeVisibility();
      };
    }, [activeWindow, subscribe, focus]);

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
          {modalWindows.map(
            ({ icon, title, hasButton, id }) =>
              hasButton && (
                <WindowButton
                  key={id}
                  icon={icon}
                  active={id === activeWindow}
                  onClick={() => {
                    if (id === activeWindow) {
                      minimize(id);
                      setActiveWindow(undefined);
                    } else {
                      restore(id);
                      focus(id);
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
