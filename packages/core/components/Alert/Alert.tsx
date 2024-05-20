import React, { forwardRef, useEffect } from 'react';
import type { FC } from 'react';
import { User2, User3, User4, User5 } from '@react95/icons';
import * as styles from './Alert.css';

import { Modal, ModalProps } from '../Modal/Modal';

import sound from './assets/chord.mp3';

export type AlertType = 'error' | 'info' | 'question' | 'warning';

const RenderImage: FC<{ option: string }> = ({ option }) => {
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

export type AlertProps = ModalProps & {
  message: string;
  hasSound?: boolean;
  type?: AlertType;
};

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ type = 'error', message, hasSound, ...rest }, ref) => {
    if (hasSound) {
      useEffect(() => {
        const audio = new Audio(sound);
        audio.play();
      }, []);
    }

    return (
      <Modal height="120" hasWindowButton={false} {...rest} ref={ref}>
        <div className={styles.dialog}>
          <div className={styles.icon}>
            <RenderImage option={type} />
          </div>
          <div className={styles.message}>{message}</div>
        </div>
      </Modal>
    );
  },
);

Alert.defaultProps = {
  type: 'error',
  buttons: [{ value: 'OK', onClick: () => {} }],
  buttonsAlignment: 'center',
  positionOffset: {
    x:
      typeof window == 'undefined'
        ? 0
        : Math.floor(window.innerWidth / 2) - 150,
    y:
      typeof window == 'undefined'
        ? 0
        : Math.floor(window.innerHeight / 2) - 100,
  },
  hasSound: false,
};
