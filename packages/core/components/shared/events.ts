import { ReactElement } from 'react';

class Emitter<U extends string, T> {
  private listeners: { [key: string]: Array<(data: T) => void> } = {};

  on(eventName: U, callback: (data: T) => void) {
    if (!this.listeners[eventName]) {
      this.listeners[eventName] = [];
    }
    this.listeners[eventName].push(callback);
  }

  off(eventName: U, callback: (data: T) => void) {
    if (this.listeners[eventName]) {
      this.listeners[eventName] = this.listeners[eventName].filter(
        cb => cb !== callback,
      );
    }
  }

  emit(eventName: U, data: T) {
    if (this.listeners[eventName]) {
      this.listeners[eventName].forEach(callback => callback(data));
    }
  }
}

export enum ModalEvents {
  AddModal = 'add-modal',
  RemoveModal = 'remove-modal',
  UpdateModal = 'update-modal',
  ModalVisibilityChanged = 'modal-visibility-changed',
}

export interface ModalWindow {
  icon?: ReactElement;
  title: string;
  hasButton: boolean;
  id: string;
}

export const modals = new Emitter<ModalEvents, ModalWindow>();
