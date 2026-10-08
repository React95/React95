import { useEffect, useRef, useState } from 'react';

import { ModalEvents, ModalWindow, useModal } from '../shared/events';

/**
 * The TaskBar's windows: the modals that registered with it, and which one is
 * active, kept in sync with the modal events.
 */
export const useModalWindows = () => {
  const [windows, setWindows] = useState<ModalWindow[]>([]);
  const [activeWindow, setActiveWindow] = useState<string>();
  // the same values, readable right away from the event handlers. That lets
  // them subscribe once, and focus a window outside of a state update (which
  // React runs while it renders)
  const windowsRef = useRef<ModalWindow[]>([]);
  const activeWindowRef = useRef<string | undefined>(undefined);
  const { minimize, restore, focus, subscribe } = useModal();

  useEffect(() => {
    const updateWindows = (next: ModalWindow[]) => {
      windowsRef.current = next;
      setWindows(next);
    };

    const updateActiveWindow = (id?: string) => {
      activeWindowRef.current = id;
      setActiveWindow(id);
    };

    const addWindow = (window: Partial<ModalWindow>) => {
      if (!window.id) {
        console.warn('Modal added without ID');
        return;
      }

      const current = windowsRef.current;

      // a window that's already there is updated in place (e.g. a new title)
      if (current.some(({ id }) => id === window.id)) {
        updateWindows(
          current.map(existing =>
            existing.id === window.id ? { ...existing, ...window } : existing,
          ),
        );
      } else {
        updateWindows([...current, window as ModalWindow]);
      }
    };

    // removing the active window makes the last one left active
    const removeWindow = ({ id }: Pick<Partial<ModalWindow>, 'id'>) => {
      const remaining = windowsRef.current.filter(window => window.id !== id);
      const lastWindow = remaining.at(-1);

      updateWindows(remaining);

      if (activeWindowRef.current === id && lastWindow) {
        focus(lastWindow.id);
      }
    };

    const unsubscribes = [
      subscribe(ModalEvents.AddModal, addWindow),
      subscribe(ModalEvents.RemoveModal, removeWindow),
      subscribe(ModalEvents.ModalVisibilityChanged, ({ id }) =>
        updateActiveWindow(id),
      ),
    ];

    return () => unsubscribes.forEach(unsubscribe => unsubscribe());
  }, [subscribe, focus]);

  // a window's TaskBar button minimizes it when it's the active one, and
  // restores and focuses it otherwise
  const toggleWindow = (id: string) => {
    if (id === activeWindowRef.current) {
      minimize(id);
      activeWindowRef.current = undefined;
      setActiveWindow(undefined);
    } else {
      restore(id);
      focus(id);
    }
  };

  return { windows, activeWindow, toggleWindow };
};
