import React, { forwardRef, useEffect, useRef, useState } from 'react';
import type { HTMLAttributes, ReactElement } from 'react';

import { Frame, FrameProps } from '../Frame/Frame';
import { List } from '../List/List';

import { Clock } from './Clock';
import { WindowButton } from './WindowButton';
import { Logo } from '@react95/icons';
import { truncate } from './TaskBar.css';
import { ModalEvents, ModalWindow, useModal } from '../shared/events';

export type TaskBarProps = {
  list?: ReactElement<typeof List>;
} & HTMLAttributes<HTMLDivElement> &
  FrameProps;

export const TaskBar = forwardRef<HTMLDivElement, TaskBarProps>(
  ({ list, className }, ref) => {
    const [showList, toggleShowList] = useState(false);
    const [activeStart, toggleActiveStart] = useState(false);
    const [modalWindows, setModalWindows] = React.useState<ModalWindow[]>([]);
    // the same list, readable right away: removing a modal focuses the next
    // one, which can't happen inside a state updater (that runs while React
    // renders)
    const modalWindowsRef = useRef<ModalWindow[]>([]);
    const updateModalWindows = (windows: ModalWindow[]) => {
      modalWindowsRef.current = windows;
      setModalWindows(windows);
    };
    const [activeWindow, setActiveWindow] = useState<string>();
    const { minimize, restore, focus, subscribe } = useModal();

    useEffect(() => {
      const addModal = (window: Partial<ModalWindow>) => {
        if (!window.id) {
          console.warn('Modal added without ID');
          return;
        }
        const modals = modalWindowsRef.current;

        // a modal that's already there is updated in place (e.g. a new title)
        if (modals.some(modal => modal.id === window.id)) {
          updateModalWindows(
            modals.map(modal =>
              modal.id === window.id ? { ...modal, ...window } : modal,
            ),
          );
        } else {
          updateModalWindows([...modals, window as ModalWindow]);
        }
      };

      const removeModal = (data: Pick<Partial<ModalWindow>, 'id'>) => {
        const filteredModals = modalWindowsRef.current.filter(
          modal => modal.id !== data.id,
        );
        const lastModal = filteredModals.at(-1);

        updateModalWindows(filteredModals);

        if (activeWindow === data.id && lastModal) {
          focus(lastModal.id);
        }
      };

      const updateVisibleModal = ({ id }: Pick<Partial<ModalWindow>, 'id'>) => {
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
