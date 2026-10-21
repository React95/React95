import { createContext } from 'react';

export type ListNavContextValue = {
  /**
   * Id of the item holding the menu's single tab stop (roving tabindex).
   * Null before the menu picks its first item on mount.
   */
  tabbableId: string | null;
  setTabbableId: (id: string) => void;
  /** a submenu has no tab stop of its own: it's reached with → */
  isSubmenu: boolean;
};

/** Provided by each List to its own items. */
export const ListNavContext = createContext<ListNavContextValue | null>(null);

export type SubmenuParentValue = {
  /** closes the submenu and moves the focus back to the item that opened it */
  close: () => void;
};

/**
 * Provided by a List.Item to the List nested in it, so that ← and Esc in the
 * submenu can close it and return to its parent item.
 */
export const SubmenuParentContext = createContext<SubmenuParentValue | null>(
  null,
);

/** Matches menuitem, menuitemcheckbox and menuitemradio. */
export const MENU_ITEM = '[role^="menuitem"]';

/** The enabled items of a menu, without its dividers or nested items. */
export const menuItems = (list: HTMLElement) =>
  Array.from(list.children).filter(
    (child): child is HTMLElement =>
      child instanceof HTMLElement &&
      child.matches(MENU_ITEM) &&
      child.getAttribute('aria-disabled') !== 'true',
  );

/** The submenu nested in an item, if it has one. */
export const submenuOf = (item: HTMLElement) =>
  Array.from(item.children).find(
    (child): child is HTMLElement =>
      child instanceof HTMLElement && child.getAttribute('role') === 'menu',
  );
