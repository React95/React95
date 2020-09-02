/* eslint-disable no-unused-vars */
import { createContext } from 'react';

export type Windows = {
  icon?: string;
  title: string;
};

export interface IModalContextProps {
  windows: Array<Windows>;
  addWindows(window: Windows): void;
  removeWindows(title: string): void;
  setActiveWindow(title: string): void;
  activeWindow?: string;
}

const ModalContext = createContext<IModalContextProps>({
  windows: [],
  addWindows: () => {},
  removeWindows: () => {},
  setActiveWindow: () => {},
  activeWindow: '',
});

export default ModalContext;
