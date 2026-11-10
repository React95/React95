import { Emitter } from './emitter';
import { ModalEvents, ModalWindow } from './modal-types';

export const modals = new Emitter<ModalEvents, ModalWindow>();

// the ids of the open modals from back to front: the last one focused is at
// the end. Kept up to date here, before any modal subscribes, so the modals
// read the new order when they hear the same event
const stack: string[] = [];

modals.on(ModalEvents.AddModal, ({ id }) => {
  // a modal is added again when its title changes, and keeps its place
  if (id && !stack.includes(id)) {
    stack.push(id);
  }
});

modals.on(ModalEvents.RemoveModal, ({ id }) => {
  const index = stack.indexOf(id as string);

  if (index !== -1) {
    stack.splice(index, 1);
  }
});

modals.on(ModalEvents.ModalVisibilityChanged, ({ id }) => {
  const index = stack.indexOf(id as string);

  // focusing no modal (`focus('no-id')`) leaves the order as it is
  if (index !== -1) {
    stack.splice(index, 1);
    stack.push(id as string);
  }
});

/**
 * Where a modal is in the stacking order, 0 being the one at the back
 * @returns The modal's position, or -1 if it isn't open
 */
export const modalStackIndex = (id: string) => stack.indexOf(id);
