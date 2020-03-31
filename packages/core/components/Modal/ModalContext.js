/* eslint-disable no-unused-vars */
import { createContext } from 'react';

const ModalContext = createContext({
  windows: [],
  addWindows: ({ icon, title }) => {},
  removeWindows: title => {},
  setActiveWindow: title => {},
  activeWindow: '',
});

export default ModalContext;
