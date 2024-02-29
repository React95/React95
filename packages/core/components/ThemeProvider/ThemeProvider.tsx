import * as React from 'react';

import { ModalProvider } from '../Modal';

const ThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => (
  <ModalProvider>{children}</ModalProvider>
);

export default ThemeProvider;
