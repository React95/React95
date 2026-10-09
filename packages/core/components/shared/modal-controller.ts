import { Emitter } from './emitter';
import { ModalEvents, ModalWindow } from './modal-types';

export const modals = new Emitter<ModalEvents, ModalWindow>();
