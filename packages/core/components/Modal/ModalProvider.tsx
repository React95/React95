import { nanoid } from 'nanoid';
import * as React from 'react';

import ModalContext, { Windows } from './ModalContext';

// eslint-disable-next-line @typescript-eslint/ban-types
export type ModalProviderProps = {};

type WindowStack = Record<string, Windows>;

type WindowAction =
  | {
      type: 'ADD_WINDOW';
      id: string;
      window: Windows;
    }
  | {
      type: 'UPDATE_WINDOW';
      id: string;
      window: Windows;
    }
  | {
      type: 'REMOVE_WINDOW';
      id: string;
    }
  | {
      type: 'REMOVE_BY_TITLE';
      title: string;
    };

const windowStackReducer: React.Reducer<WindowStack, WindowAction> = (
  state,
  action,
) => {
  const newWindows = { ...state };
  switch (action.type) {
    case 'ADD_WINDOW': {
      newWindows[action.id] = action.window;
      return newWindows;
    }
    case 'REMOVE_WINDOW': {
      delete newWindows[action.id];
      return newWindows;
    }
    case 'UPDATE_WINDOW': {
      newWindows[action.id] = action.window;
      return newWindows;
    }
    case 'REMOVE_BY_TITLE': {
      Object.entries(newWindows).forEach(([id, window]) => {
        if (window.title === action.title) {
          delete newWindows[id];
        }
      });
      return newWindows;
    }
    default:
      return state;
  }
};

const ModalProvider: React.FunctionComponent = ({ children }) => {
  const [windows, dispatch] = React.useReducer(windowStackReducer, {});
  const [activeWindow, setActiveWindow] = React.useState<string>();

  const addWindows = (window: Windows) => {
    const id = nanoid();
    dispatch({ type: 'ADD_WINDOW', id, window });
    return id;
  };
  // TODO: Remove this method in the next major release - updating by IDs is more sensible
  const removeWindows = (title: string) => {
    dispatch({ type: 'REMOVE_BY_TITLE', title });
  };
  const removeWindowById = (id: string) => {
    dispatch({ type: 'REMOVE_WINDOW', id });
  };
  const updateWindow = (id: string, window: Windows) => {
    dispatch({ type: 'UPDATE_WINDOW', id, window });
  };

  return (
    <ModalContext.Provider
      value={{
        windows,
        addWindows,
        removeWindows,
        removeWindowById,
        updateWindow,
        setActiveWindow,
        activeWindow,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
