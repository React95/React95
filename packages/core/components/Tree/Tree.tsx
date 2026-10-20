import { forwardRef, useEffect, useRef, useState } from 'react';
import type {
  FocusEvent,
  ForwardRefExoticComponent,
  HTMLAttributes,
  KeyboardEvent,
  RefAttributes,
} from 'react';
import cn from 'classnames';

import { Node, icons, NodeProps, NodeRoot } from './Node';
import { TreeNodeControls, TreeNavContext } from './TreeNav';
import * as styles from './Tree.css';
import { Frame, FrameProps } from '../Frame/Frame';

export type TreeProps = {
  data: Array<NodeProps>;
  root?: Omit<NodeProps, 'children'>;
} & FrameProps &
  HTMLAttributes<HTMLUListElement>;

type TreeComposition = ForwardRefExoticComponent<
  TreeProps & RefAttributes<HTMLUListElement>
> & {
  icons: typeof icons;
} & Omit<FrameProps, 'as'>;

export const Tree = forwardRef<HTMLUListElement, TreeProps>(
  (
    {
      data = [],
      root,
      onKeyDown: onKeyDownProp,
      onFocus: onFocusProp,
      ...rest
    },
    ref,
  ) => {
    const listRef = useRef<HTMLUListElement | null>(null);
    // a single tab stop for the whole tree (roving tabindex)
    const [tabbableUid, setTabbableUid] = useState<string | null>(null);
    const controls = useRef(new Map<string, TreeNodeControls>());

    const visibleItems = (): Array<HTMLElement> =>
      Array.from(
        listRef.current?.querySelectorAll<HTMLElement>('[role="treeitem"]') ??
          [],
      );

    const focusNode = (el: HTMLElement) => {
      setTabbableUid(el.dataset.uid ?? null);
      el.focus();
    };

    // keep exactly one tab stop inside the tree: whenever no treeitem
    // holds it — on the first render, or after the node holding it went
    // away (e.g. its folder was collapsed with the mouse) — the first
    // visible node claims it, so Tab never skips the whole tree
    useEffect(() => {
      const items = visibleItems();
      if (items.length && !items.some(item => item.tabIndex === 0)) {
        setTabbableUid(items[0].dataset.uid ?? null);
      }
    });

    // the tab stop follows the focus, whether it came from the keyboard
    // or the mouse
    const onFocus = (e: FocusEvent<HTMLUListElement>) => {
      const itemEl = (e.target as HTMLElement).closest?.(
        '[role="treeitem"]',
      ) as HTMLElement | null;
      if (!itemEl || !listRef.current?.contains(itemEl)) {
        return;
      }
      const uid = itemEl.dataset.uid ?? null;
      if (uid && uid !== tabbableUid) {
        setTabbableUid(uid);
      }
    };

    // WAI-ARIA treeview keyboard interaction, delegated from the tree
    // root: ↑/↓ move between the visible nodes, → opens a folder (or moves
    // into it), ← closes a folder (or moves to its parent), Home/End jump
    // to the first/last node, Enter selects, Space toggles + selects
    const onKeyDown = (e: KeyboardEvent<HTMLUListElement>) => {
      const itemEl = (e.target as HTMLElement).closest?.(
        '[role="treeitem"]',
      ) as HTMLElement | null;
      if (!itemEl || !listRef.current?.contains(itemEl)) {
        return;
      }

      const uid = itemEl.dataset.uid ?? '';
      const node = controls.current.get(uid);
      const items = visibleItems();
      const index = items.indexOf(itemEl);
      const expandable = itemEl.getAttribute('aria-expanded') !== null;
      const expanded = itemEl.getAttribute('aria-expanded') === 'true';

      const move = (next: number) => {
        const el = items[next];
        if (el && next !== index) {
          e.preventDefault();
          focusNode(el);
        }
      };

      switch (e.key) {
        case 'ArrowDown':
          move(Math.min(index + 1, items.length - 1));
          break;
        case 'ArrowUp':
          move(Math.max(index - 1, 0));
          break;
        case 'Home':
          e.preventDefault();
          if (items[0]) {
            focusNode(items[0]);
          }
          break;
        case 'End':
          e.preventDefault();
          if (items[items.length - 1]) {
            focusNode(items[items.length - 1]);
          }
          break;
        case 'ArrowRight':
          if (!expandable) {
            break;
          }
          if (!expanded) {
            // open the folder, keeping focus on it
            e.preventDefault();
            node?.toggle?.();
          } else {
            // move into the first child
            move(index + 1);
          }
          break;
        case 'ArrowLeft': {
          if (expandable && expanded) {
            // close the folder, keeping focus on it
            e.preventDefault();
            node?.toggle?.();
          } else {
            // move to the parent folder
            const parent = itemEl.parentElement?.closest?.(
              '[role="treeitem"]',
            ) as HTMLElement | null;
            if (parent) {
              e.preventDefault();
              focusNode(parent);
            }
          }
          break;
        }
        case 'Enter':
          e.preventDefault();
          node?.activate(e);
          break;
        case ' ':
          // Space keeps its long-standing behavior: it toggles folders
          // open/closed and selects the node, like a click does
          e.preventDefault();
          if (expandable) {
            node?.toggle?.();
          }
          node?.activate(e);
          break;
        default:
          break;
      }
    };

    const setRefs = (el: HTMLUListElement | null) => {
      listRef.current = el;
      if (typeof ref === 'function') {
        ref(el);
      } else if (ref) {
        (ref as { current: HTMLUListElement | null }).current = el;
      }
    };

    return (
      <TreeNavContext.Provider
        value={{
          tabbableUid,
          register: (uid, node) => controls.current.set(uid, node),
          unregister: uid => {
            controls.current.delete(uid);
          },
          focusNode,
        }}
      >
        <Frame
          {...rest}
          className={cn(styles.tree, rest.className)}
          as="ul"
          role="tree"
          ref={setRefs}
          onKeyDown={e => {
            onKeyDownProp?.(e);
            onKeyDown(e);
          }}
          onFocus={e => {
            onFocusProp?.(e);
            onFocus(e);
          }}
        >
          {root ? (
            // the root is the tree's first treeitem, always expanded; the
            // nodes live inside its group so the arrow keys and screen
            // readers reach it like any other node
            <NodeRoot {...root}>
              <ul className={styles.rootGroup} role="group">
                {data.map(dataNode => (
                  <Node key={dataNode.id} {...dataNode} />
                ))}
              </ul>
            </NodeRoot>
          ) : (
            data.map(dataNode => <Node key={dataNode.id} {...dataNode} />)
          )}
        </Frame>
      </TreeNavContext.Provider>
    );
  },
) as TreeComposition;

Tree.icons = icons;
