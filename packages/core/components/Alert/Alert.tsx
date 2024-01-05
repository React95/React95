import { User2, User3, User4, User5 } from '@react95/icons';
import styled from '@xstyled/styled-components';
import React, { forwardRef, useEffect } from 'react';

import Modal, { ModalProps } from '../Modal/Modal';

import sound from './assets/chord.mp3';

export type AlertType = 'error' | 'info' | 'question' | 'warning';

const RenderImage: React.FC<{ option: string }> = ({ option }) => {
  switch (option) {
    case 'info':
      return <User5 width={32} height={32} variant="32x32_4" />;
    case 'question':
      return <User3 width={32} height={32} variant="32x32_4" />;
    case 'warning':
      return <User2 width={32} height={32} variant="32x32_4" />;
    case 'error':
    default:
      return <User4 width={32} height={32} variant="32x32_4" />;
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
  hasSound?: boolean;
  type?: AlertType;
};

const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ type = 'error', message, closeAlert, hasSound, ...rest }, ref) => {
    if (hasSound) {
      useEffect(() => {
        const audio = new Audio(sound);
        audio.play();
      }, []);
    }

    return (
      <Modal
        closeModal={closeAlert}
        height="120"
        hasWindowButton={false}
        {...rest}
        ref={ref}
      >
        <Dialog>
          <IconWrapper>
            <RenderImage option={type} />
          </IconWrapper>
          <Message>{message}</Message>
        </Dialog>
      </Modal>
    );
  },
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
  hasSound: false,
};

export default Alert;
