import React from 'react';
import styled from '@xstyled/styled-components';

import Modal, { ModalProps } from '../Modal/Modal';
import { IconUser3, IconUser2, IconUser4, IconUser5 } from '@react95/icons';

export type AlertType = 'error' | 'info' | 'question' | 'warning';

const RenderImage: React.FC<{ option: string }> = ({ option }) => {
  switch (option) {
    case 'info':
      return <IconUser5 variant="32x32_4" />;
    case 'question':
      return <IconUser3 variant="32x32_4" />;
    case 'warning':
      return <IconUser2 variant="32x32_4" />;
    case 'error':
    default:
      return <IconUser4 variant="32x32_4" />;
  }
};

const Message = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconWrapper = styled.div`
  padding: 7 15 7 7;
`;

const Dialog = styled.div`
  display: flex;
  flex-direction: row;
`;

export type AlertProps = Omit<ModalProps, 'closeModal'> & {
  message: string;
  closeAlert: ModalProps['closeModal'];
  type?: AlertType;
};

const Alert: React.FC<AlertProps> = ({
  type = 'error',
  message,
  closeAlert,
  ...rest
}) => (
  <Modal closeModal={closeAlert} height="120" hasWindowButton={false} {...rest}>
    <Dialog>
      <IconWrapper>
        <RenderImage option={type} />
      </IconWrapper>
      <Message>{message}</Message>
    </Dialog>
  </Modal>
);

Alert.displayName = 'Alert';

Alert.defaultProps = {
  type: 'error',
  buttons: [{ value: 'OK', onClick: () => {} }],
  closeAlert: () => {},
  buttonsAlignment: 'center',
  defaultPosition: {
    x:
      typeof window == 'undefined'
        ? 0
        : Math.floor(window.innerWidth / 2) - 150,
    y:
      typeof window == 'undefined'
        ? 0
        : Math.floor(window.innerHeight / 2) - 80,
  },
};

export default Alert;
