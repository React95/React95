/* eslint-disable no-unused-vars */
import { createContext } from 'react';

import { IconProps } from '../Icon/Icon';

export interface IWindow {
  icon?: IconProps['name'];
  title: string;
  id: string;
};

export interface IModalContextProps {
  windows: Array<IWindow>;
  addWindows(window: IWindow): void;
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
