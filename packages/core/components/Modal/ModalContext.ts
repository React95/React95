/* eslint-disable no-unused-vars */
import { createContext } from 'react';
import type { ReactElement } from 'react';

export type Windows = {
  icon?: ReactElement;
  title: string;
  hasButton: boolean;
};

export interface IModalContextProps {
  windows: Record<string, Windows>;
  addWindows(window: Windows): string | void;
  removeWindow(id: string): void;
  updateWindow(id: string, window: Windows): void;
  setActiveWindow(title: string): void;
  activeWindow?: string;
}

export const ModalContext = createContext<IModalContextProps>({
  windows: {},
  addWindows: () => {},
  removeWindow: () => {},
  updateWindow: () => {},
  setActiveWindow: () => {},
  activeWindow: '',
});
