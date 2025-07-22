import { Emitter } from './emitter';
import { ModalEvents, ModalWindow } from './modal-types';

export const modals = new Emitter<ModalEvents, ModalWindow>();

export const modalController = {
  add: (modal: ModalWindow) => {
    modals.emit(ModalEvents.AddModal, modal);
  },

  remove: (id: string) => {
    modals.emit(ModalEvents.RemoveModal, { id });
  },

  minimize: (id: string) => {
    modals.emit(ModalEvents.MinimizeModal, { id });
  },

  restore: (id: string) => {
    modals.emit(ModalEvents.RestoreModal, { id });
  },

  focus: (id: string) => {
    modals.emit(ModalEvents.ModalVisibilityChanged, { id });
  },

  // Convenience method to toggle between minimize/restore
  toggle: (id: string, isActive: boolean) => {
    if (isActive) {
      modals.emit(ModalEvents.MinimizeModal, { id });
    } else {
      modals.emit(ModalEvents.RestoreModal, { id });
      modals.emit(ModalEvents.ModalVisibilityChanged, { id });
    }
  },
};
