import { useState, useId, useRef, forwardRef, Children } from 'react';
import type {
  MouseEvent,
  KeyboardEvent,
  ReactElement,
  HTMLAttributes,
} from 'react';
import cn from 'classnames';

import { Tab, TabProps } from './Tab';
import { navContainer, navbar } from './Tabs.css';
import { Frame, FrameProps } from '../Frame/Frame';

export type TabsProps = {
  defaultActiveTab?: string;
  children: ReactElement<TabProps> | Array<ReactElement<TabProps>>;

  onChange?(title: string, e: MouseEvent | KeyboardEvent): void;
} & HTMLAttributes<HTMLOListElement> &
  Omit<FrameProps, 'as'>;

export const Tabs = forwardRef<HTMLOListElement, TabsProps>(
  ({ children, defaultActiveTab, onChange, ...rest }, ref) => {
    const tabs = Children.toArray(children) as Array<ReactElement<TabProps>>;
    const [firstTab] = tabs;
    const [activeTab, setActiveTab] = useState(
      defaultActiveTab || firstTab.props.title,
    );

    // ids wiring each tab to the shared tabpanel
    const idBase = useId();
    const panelId = `${idBase}-tabpanel`;
    const tabRefs = useRef<Array<HTMLLIElement | null>>([]);

    const selectTab = (
      title: string,
      disabled: boolean | undefined,
      e?: MouseEvent | KeyboardEvent,
    ) => {
      if (disabled) {
        return;
      }
      if (onChange && e) {
        onChange(title, e);
      }
      setActiveTab(title);
    };

    const focusTab = (index: number) => {
      tabRefs.current[index]?.focus();
    };

    // WAI-ARIA tabs pattern: arrow keys move focus between the enabled
    // tabs (and select them), Home/End jump to the first/last tab
    const onTabKeyDown = (index: number, e: KeyboardEvent<HTMLLIElement>) => {
      const enabled = tabs
        .map((tab, i) => (tab.props.disabled ? -1 : i))
        .filter(i => i >= 0);
      let next = -1;

      switch (e.key) {
        case 'ArrowRight':
          next = enabled[(enabled.indexOf(index) + 1) % enabled.length];
          break;
        case 'ArrowLeft':
          next =
            enabled[
              (enabled.indexOf(index) - 1 + enabled.length) % enabled.length
            ];
          break;
        case 'Home':
          next = enabled[0];
          break;
        case 'End':
          next = enabled[enabled.length - 1];
          break;
        default:
          return;
      }

      e.preventDefault();
      if (next >= 0 && next !== index) {
        const { title, disabled } = tabs[next].props;
        selectTab(title, disabled, e);
        focusTab(next);
      }
    };

    const activeIndex = Math.max(
      0,
      tabs.findIndex(tab => tab.props.title === activeTab),
    );

    return (
      <>
        <Frame
          {...rest}
          className={cn(navbar, rest.className)}
          as="ol"
          role="tablist"
          ref={ref}
        >
          {tabs.map((child, index) => {
            const { title, disabled } = child.props;
            const isActive = title === activeTab;

            return (
              <Tab
                key={title}
                {...child.props}
                id={`${idBase}-tab-${index}`}
                role="tab"
                aria-selected={isActive}
                aria-controls={panelId}
                aria-disabled={disabled || undefined}
                tabIndex={isActive ? 0 : -1}
                activeTab={activeTab}
                ref={el => {
                  tabRefs.current[index] = el;
                }}
                onClick={e => selectTab(title, disabled, e)}
                onKeyDown={e => {
                  child.props.onKeyDown?.(e);
                  onTabKeyDown(index, e);
                }}
              />
            );
          })}
        </Frame>

        <Frame
          className={navContainer}
          width={rest.width || rest.w}
          role="tabpanel"
          id={panelId}
          aria-labelledby={`${idBase}-tab-${activeIndex}`}
          tabIndex={0}
        >
          {tabs.map(
            child => child.props.title === activeTab && child.props.children,
          )}
        </Frame>
      </>
    );
  },
);
