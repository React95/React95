/* eslint-disable no-unused-vars */
import { createContext } from 'react';

export type Windows = {
  icon: String;
  title: String;
};

export interface IModalContextProps {
  windows: Array<Windows>;
  addWindows(window: Windows): void;
  removeWindows(title: String): void;
  setActiveWindow(title: String): void;
  activeWindow?: String;
}

const ModalContext = createContext<IModalContextProps>({
  windows: [],
  addWindows: () => {},
  removeWindows: () => {},
  setActiveWindow: () => {},
  activeWindow: '',
});

export default ModalContext;
