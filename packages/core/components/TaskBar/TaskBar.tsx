import { forwardRef, useEffect, useRef, useState } from 'react';
import type { HTMLAttributes, ReactElement } from 'react';

import { Frame, FrameProps } from '../Frame/Frame';
import { List } from '../List/List';
import { menuItems } from '../List/ListNav';

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

    const startRef = useRef<HTMLButtonElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);
    // the item to focus once the menu shows, when the keyboard opened it
    const focusOnOpen = useRef<'first' | 'last' | null>(null);

    const focusItem = (which: 'first' | 'last') => {
      const menu = menuRef.current?.querySelector<HTMLElement>('[role="menu"]');
      const items = menu ? menuItems(menu) : [];

      (which === 'first' ? items[0] : items[items.length - 1])?.focus();
    };

    useEffect(() => {
      if (showList && focusOnOpen.current) {
        focusItem(focusOnOpen.current);
        focusOnOpen.current = null;
      }
    }, [showList]);

    const openList = (focus: 'first' | 'last' | null) => {
      if (showList) {
        if (focus) focusItem(focus);

        return;
      }

      focusOnOpen.current = focus;
      toggleActiveStart(true);
      toggleShowList(true);
    };

    const closeList = () => {
      toggleActiveStart(false);
      toggleShowList(false);
    };

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
        {/* a WAI-ARIA menu button: Enter, Space or ↓ open the menu on its
            first item, ↑ on its last, and Esc closes it */}
        <WindowButton
          small
          icon={<Logo variant="32x32_4" />}
          active={activeStart}
          aria-haspopup="menu"
          aria-expanded={showList}
          ref={startRef}
          onClick={e => {
            if (showList) {
              closeList();

              return;
            }

            // a click from Enter or Space (no pointer, so detail is 0) also
            // moves the focus into the menu
            openList(e.detail === 0 ? 'first' : null);
          }}
          onKeyDown={e => {
            if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
              e.preventDefault();
              openList(e.key === 'ArrowDown' ? 'first' : 'last');
            } else if (e.key === 'Escape' && showList) {
              closeList();
            }
          }}
        >
          Start
        </WindowButton>
        {/* after Start, so Tab goes from Start into the menu and on out of it */}
        {showList && (
          <Frame
            position="absolute"
            bottom="28px"
            ref={menuRef}
            onClick={closeList}
            onKeyDown={e => {
              // a submenu handles its own Esc; the top menu leaves it to us
              if (e.key === 'Escape' && !e.defaultPrevented) {
                e.preventDefault();
                closeList();
                startRef.current?.focus();
              }
            }}
            onBlur={e => {
              const next = e.relatedTarget;

              // the focus left the menu, for something other than Start
              // (whose click toggles the menu itself)
              if (
                next &&
                !e.currentTarget.contains(next) &&
                !startRef.current?.contains(next)
              ) {
                closeList();
              }
            }}
          >
            {list}
          </Frame>
        )}

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
