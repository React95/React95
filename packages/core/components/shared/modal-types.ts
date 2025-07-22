import { ReactElement } from 'react';

export enum ModalEvents {
  AddModal = 'add-modal',
  RemoveModal = 'remove-modal',
  ModalVisibilityChanged = 'modal-visibility-changed',
  MinimizeModal = 'minimize-modal',
  RestoreModal = 'restore-modal',
  FocusModal = 'focus-modal',
}

export interface ModalWindow {
  icon?: ReactElement;
  title: string;
  hasButton: boolean;
  id: string;
}
