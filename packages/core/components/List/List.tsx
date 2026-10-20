import {
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import type {
  ElementType,
  ForwardedRef,
  HTMLAttributes,
  KeyboardEvent,
  ReactElement,
} from 'react';
import cn from 'classnames';

import { ListItem } from './ListItem';
import { Divider } from './ListDivider';
import {
  Frame,
  FrameProps,
  InferredElement,
  Polymorphic,
  fixedForwardRef,
} from '../Frame/Frame';
import { list } from './List.css';
import {
  ListNavContext,
  ListNavContextValue,
  MENU_ITEM,
  SubmenuParentContext,
  menuItems,
} from './ListNav';

export type ListProps<TAs extends ElementType = 'ul'> =
  HTMLAttributes<HTMLUListElement> & Polymorphic<TAs, FrameProps>;

/**
 * A menu, following the WAI-ARIA menu pattern: one tab stop for the whole
 * menu, ↑/↓/Home/End to move between items, and ← or Esc to leave a submenu.
 * Opening a submenu and activating an item are handled by List.Item.
 */
const ListComponent = fixedForwardRef<HTMLUListElement, ListProps<'ul'>>(
  ({ onKeyDown, ...rest }, ref) => {
    const listRef = useRef<HTMLUListElement>(null);
    useImperativeHandle(ref, () => listRef.current as HTMLUListElement);

    const submenuParent = useContext(SubmenuParentContext);
    const isSubmenu = submenuParent !== null;
    const [tabbableId, setTabbableId] = useState<string | null>(null);

    // the first item holds the tab stop until another one gets the focus
    useEffect(() => {
      if (isSubmenu || !listRef.current) return;

      const items = menuItems(listRef.current);
      const tabbableIsAnItem = items.some(
        item => item.dataset.listItemId === tabbableId,
      );

      if (!tabbableIsAnItem && items[0]?.dataset.listItemId) {
        setTabbableId(items[0].dataset.listItemId);
      }
    });

    const nav = useMemo<ListNavContextValue>(
      () => ({ tabbableId, setTabbableId, isSubmenu }),
      [tabbableId, isSubmenu],
    );

    const handleKeyDown = (event: KeyboardEvent<HTMLUListElement>) => {
      onKeyDown?.(event);

      if (event.defaultPrevented) return;

      const menu = event.currentTarget;
      const current = (event.target as HTMLElement).closest<HTMLElement>(
        MENU_ITEM,
      );

      // keys pressed in a nested menu are that menu's to handle
      if (!current || current.parentElement !== menu) return;

      const items = menuItems(menu);
      const index = items.indexOf(current);
      const last = items.length - 1;

      switch (event.key) {
        case 'ArrowDown':
          items[index === last ? 0 : index + 1]?.focus();
          break;
        case 'ArrowUp':
          items[index <= 0 ? last : index - 1]?.focus();
          break;
        case 'Home':
          items[0]?.focus();
          break;
        case 'End':
          items[last]?.focus();
          break;
        case 'ArrowLeft':
        case 'Escape':
          // the top menu leaves Esc to whatever opened it (e.g. the TaskBar)
          if (!submenuParent) return;

          submenuParent.close();
          break;
        default:
          return;
      }

      // also tells the menus around this one that the key was handled
      event.preventDefault();
    };

    return (
      <ListNavContext.Provider value={nav}>
        <Frame
          role="menu"
          {...rest}
          ref={listRef}
          className={cn(list, rest.className)}
          as="ul"
          onKeyDown={handleKeyDown}
        />
      </ListNavContext.Provider>
    );
  },
);

type ListReturnType = <TAs extends ElementType = 'ul'>(
  props: ListProps<TAs> & { ref?: ForwardedRef<InferredElement<TAs>> },
) => ReactElement;

export interface ListStatics {
  Item: typeof ListItem;
  Divider: typeof Divider;
}

type ListWithStatics = ListReturnType & ListStatics;

export const List = Object.assign(ListComponent, {
  Item: ListItem,
  Divider: Divider,
}) as ListWithStatics;
