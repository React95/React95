import {
  useContext,
  useEffect,
  useId,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import type {
  ElementType,
  FocusEvent,
  ForwardedRef,
  KeyboardEvent,
  LiHTMLAttributes,
  ReactElement,
} from 'react';
import cn from 'classnames';

import {
  Frame,
  FrameProps,
  InferredElement,
  Polymorphic,
  fixedForwardRef,
} from '../Frame/Frame';
import { listItem } from './List.css';
import {
  ListNavContext,
  SubmenuParentContext,
  menuItems,
  submenuOf,
} from './ListNav';

type ItemProps<TAs extends ElementType = 'li'> =
  LiHTMLAttributes<HTMLLIElement> & Polymorphic<TAs, FrameProps>;

const ItemComponent = fixedForwardRef<HTMLLIElement, ItemProps<'li'>>(
  (rest, ref) => (
    <Frame
      {...rest}
      ref={ref}
      className={cn(listItem, rest.className)}
      as="li"
    />
  ),
);

const Item = ItemComponent as <TAs extends ElementType = 'li'>(
  props: ItemProps<TAs> & { ref?: ForwardedRef<InferredElement<TAs>> },
) => ReactElement;

export type ListItemProps<TAs extends ElementType = 'li'> = {
  icon?: ReactElement;
} & ItemProps<TAs>;

/**
 * A menu item. → (or Enter/Space) opens its submenu and moves into it, and
 * Enter/Space on an item without a submenu clicks it, so `onClick` runs as
 * it does for the mouse. Hovering still opens the submenu, as before.
 */
const ListItemComponent = fixedForwardRef<HTMLLIElement, ListItemProps<'li'>>(
  ({ icon, children = [], onKeyDown, onFocus, onBlur, ...rest }, ref) => {
    const itemRef = useRef<HTMLLIElement>(null);
    useImperativeHandle(ref, () => itemRef.current as HTMLLIElement);

    const id = useId();
    const nav = useContext(ListNavContext);
    const [hasSubmenu, setHasSubmenu] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const focusSubmenuWhenOpen = useRef(false);

    // a nested List is this item's submenu
    useEffect(() => {
      setHasSubmenu(Boolean(itemRef.current && submenuOf(itemRef.current)));
    });

    const focusFirstSubmenuItem = () => {
      const submenu = itemRef.current && submenuOf(itemRef.current);

      if (submenu) menuItems(submenu)[0]?.focus();
    };

    // the submenu can only take the focus once it's displayed
    useEffect(() => {
      if (expanded && focusSubmenuWhenOpen.current) {
        focusSubmenuWhenOpen.current = false;
        focusFirstSubmenuItem();
      }
    }, [expanded]);

    const openSubmenu = () => {
      if (expanded) {
        focusFirstSubmenuItem();

        return;
      }

      focusSubmenuWhenOpen.current = true;
      setExpanded(true);
    };

    const submenuParent = useMemo(
      () => ({
        close: () => {
          setExpanded(false);
          itemRef.current?.focus();
        },
      }),
      [],
    );

    const handleKeyDown = (event: KeyboardEvent<HTMLLIElement>) => {
      onKeyDown?.(event);

      // keys pressed in the submenu are its own items' to handle
      if (event.defaultPrevented || event.target !== event.currentTarget) {
        return;
      }

      switch (event.key) {
        case 'ArrowRight':
          if (!hasSubmenu) return;

          openSubmenu();
          break;
        case 'Enter':
        case ' ':
          if (hasSubmenu) openSubmenu();
          else event.currentTarget.click();
          break;
        default:
          return;
      }

      event.preventDefault();
    };

    const handleFocus = (event: FocusEvent<HTMLLIElement>) => {
      onFocus?.(event);

      if (event.target === event.currentTarget) nav?.setTabbableId(id);
    };

    // the submenu closes once the focus leaves the item and its submenu
    const handleBlur = (event: FocusEvent<HTMLLIElement>) => {
      onBlur?.(event);

      if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
        setExpanded(false);
      }
    };

    const isTabStop = nav !== null && !nav.isSubmenu && nav.tabbableId === id;

    return (
      <Item
        role={nav ? 'menuitem' : undefined}
        aria-haspopup={hasSubmenu ? 'menu' : undefined}
        aria-expanded={hasSubmenu ? expanded : undefined}
        {...rest}
        ref={itemRef}
        data-list-item-id={id}
        tabIndex={nav ? (isTabStop ? 0 : -1) : rest.tabIndex}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        {icon}
        <SubmenuParentContext.Provider value={submenuParent}>
          {children}
        </SubmenuParentContext.Provider>
      </Item>
    );
  },
);

export const ListItem = ListItemComponent as <TAs extends ElementType = 'li'>(
  props: ListItemProps<TAs> & { ref?: ForwardedRef<InferredElement<TAs>> },
) => ReactElement;
