import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ModalContext from './ModalContext';

const ModalProvider = ({ children }) => {
  const [windows, setWindows] = useState([]);
  const [activeWindow, setActiveWindow] = useState(undefined);

  const addWindows = window => setWindows(state => [...state, window]);
  const removeWindows = title =>
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

ModalProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

ModalProvider.defaultProps = {
  children: undefined,
};

export default ModalProvider;
