import * as React from 'react';
import { ModalProvider } from '../../../components/Modal/ModalProvider';

export const withModal = (Story, context) => (
  <ModalProvider>
    <Story {...context} />
  </ModalProvider>
);
