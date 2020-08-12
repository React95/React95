import * as React from 'react';

import ModalContext, { Windows } from './ModalContext';

export type ModalProviderProps = {};

const ModalProvider: React.FunctionComponent<ModalProviderProps> = ({
  children,
}) => {
  const [windows, setWindows] = React.useState<Array<Windows>>([]);
  const [activeWindow, setActiveWindow] = React.useState<String>();

  const addWindows = (window: Windows) =>
    setWindows(state => [...state, window]);
  const removeWindows = (title: String) =>
    setWindows(state => state.filter(w => w.title !== title));

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
