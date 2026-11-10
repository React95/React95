import { createContext } from 'react';
import type { KeyboardEvent } from 'react';

export type TreeNodeControls = {
  /** toggles a folder open/closed; null for leaf nodes */
  toggle: (() => void) | null;
  /** runs the node's onClick, for keyboard activation */
  activate: (event: KeyboardEvent) => void;
};

export type TreeNavContextValue = {
  /**
   * Unique id of the node holding the single tab stop (roving tabindex).
   * Null until the tree assigns the tab stop to its first node.
   */
  tabbableUid: string | null;
  register: (uid: string, controls: TreeNodeControls) => void;
  unregister: (uid: string) => void;
  /** moves the single tab stop to the given node element and focuses it */
  focusNode: (el: HTMLElement) => void;
};

/**
 * Wires every Node to the Tree's keyboard navigation: the Tree owns the
 * roving tabindex and the arrow-key handling, while each Node registers
 * the callbacks needed to toggle and activate itself.
 */
export const TreeNavContext = createContext<TreeNavContextValue | null>(null);
