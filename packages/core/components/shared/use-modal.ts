import { useCallback } from 'react';

import { modals } from './modal-controller';
import { ModalEvents, ModalWindow } from './modal-types';

/**
 * Hook for controlling and listening to modal events
 * @returns Object with methods to control modals and subscribe to events
 */
export const useModal = () => {
  const add = useCallback((modal: ModalWindow) => {
    modals.emit(ModalEvents.AddModal, modal);
  }, []);

  const remove = useCallback((id: string) => {
    modals.emit(ModalEvents.RemoveModal, { id });
  }, []);

  const minimize = useCallback((id: string) => {
    modals.emit(ModalEvents.MinimizeModal, { id });
  }, []);

  const restore = useCallback((id: string) => {
    modals.emit(ModalEvents.RestoreModal, { id });
  }, []);

  const focus = useCallback((id: string) => {
    modals.emit(ModalEvents.ModalVisibilityChanged, { id });
  }, []);

  const toggle = useCallback((id: string, isActive: boolean) => {
    if (isActive) {
      modals.emit(ModalEvents.MinimizeModal, { id });
    } else {
      modals.emit(ModalEvents.RestoreModal, { id });
      modals.emit(ModalEvents.ModalVisibilityChanged, { id });
    }
  }, []);

  const subscribe = useCallback(
    (event: ModalEvents, callback: (data: Partial<ModalWindow>) => void) => {
      modals.on(event, callback);
      return () => modals.off(event, callback);
    },
    [],
  );

  return { add, remove, minimize, restore, focus, toggle, subscribe };
};
