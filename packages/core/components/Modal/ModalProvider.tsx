import * as React from 'react';

import ModalContext, { IWindow } from './ModalContext';

export type ModalProviderProps = {};

const ModalProvider: React.FunctionComponent<ModalProviderProps> = ({
  children,
}) => {
  const [windows, setWindows] = React.useState<Array<IWindow>>([]);
  const [activeWindow, setActiveWindow] = React.useState<string>();

  const addWindows = (window: IWindow) => {
    setWindows(state => [...state, window]);
    setActiveWindow(window.id);
  };
  const removeWindows = (id: string) => {
    setWindows(state => state.filter(w => w.id !== id));
  };

  return (
    <ModalContext.Provider
      value={{
        windows,
        addWindows,
        removeWindows,
        setActiveWindow,
        activeWindow,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
