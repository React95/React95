import * as React from 'react';
import { ModalProvider } from '../../../components/Modal';

export const withModal = (Story, context) => (
  <ModalProvider>
    <Story {...context} />
  </ModalProvider>
);
