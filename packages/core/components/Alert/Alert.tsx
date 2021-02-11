import React, { useEffect } from 'react';
import styled, { StyledComponent } from '@xstyled/styled-components';

import Modal, { ModalProps } from '../Modal/Modal';
import Icon, { IconProps } from '../Icon/Icon';

import wavFile from '../../assets/chord.wav'

export const DialogImages = {
  error: 'user_4_32x32_4bit',
  info: 'user_5_32x32_4bit',
  question: 'user_3_32x32_4bit',
  warning: 'user_2_32x32_4bit',
};

export type DialogImageProps = { type?: keyof typeof DialogImages };

const Message = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled(Icon)`
  margin: 7 15 7 7;
`;

export type DialogProps = StyledComponent<'div', any, {}, never> & {
  Message: typeof Message;
  Image: typeof Icon;
};

const Dialog: DialogProps = Object.assign(
  styled.div`
    display: flex;
    flex-direction: row;
  `,
  {
    Message,
    Image,
  },
);

export type AlertProps = Omit<
  ModalProps,
  'closeModal'
> & DialogImageProps & {
  message: string;
  closeAlert: ModalProps['closeModal'];
  hasSound: boolean;
};

const Alert: React.FC<AlertProps> = ({
  type = 'error',
  message,
  closeAlert,
  hasSound,
  ...rest
}) => {
  if (hasSound) {
    useEffect(() => {
      const audio = new Audio(wavFile)
      audio.play()
    }, [])
  }

  return (
    <Modal closeModal={closeAlert} height="120" hasWindowButton={false} {...rest}>
      <Dialog>
        <Dialog.Image name={DialogImages[type] as IconProps['name']} />
        <Dialog.Message>{message}</Dialog.Message>
      </Dialog>
    </Modal>
  );
}

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
