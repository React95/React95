import { forwardRef, useEffect } from 'react';
import { User2, User3, User4, User5 } from '@react95/icons';
import * as styles from './Alert.css';

import { Modal, ModalProps } from '../Modal/Modal';

import sound from './assets/chord.mp3';

export type AlertType = 'error' | 'info' | 'question' | 'warning';

const icons = {
  error: { Icon: User4, label: 'Error' },
  info: { Icon: User5, label: 'Information' },
  question: { Icon: User3, label: 'Question' },
  warning: { Icon: User2, label: 'Warning' },
};

const RenderImage = ({ option }: { option: string }) => {
  const { Icon, label } = icons[option as AlertType] ?? icons.error;

  return (
    <Icon
      width={32}
      height={32}
      variant="32x32_4"
      role="img"
      aria-label={label}
    />
  );
};

export type AlertProps = ModalProps & {
  message: string;
  hasSound?: boolean;
  type?: AlertType;
};

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  (
    { type = 'error', message, hasSound = false, dragOptions, ...rest },
    ref,
  ) => {
    useEffect(() => {
      if (!hasSound) return;
      const audio = new Audio(sound);
      // browsers block sound until the user has interacted with the page, so
      // an alert that opens on its own is just silent
      audio.play().catch(() => {
        console.warn(
          "[React95] Alert: the browser blocked the alert's sound. Browsers " +
            'only play sound after the user has interacted with the page.',
        );
      });
    }, [hasSound]);

    return (
      <Modal
        height="120"
        dragOptions={{
          defaultPosition: {
            x:
              typeof window == 'undefined'
                ? 0
                : Math.floor(window.innerWidth / 2) - 150,
            y:
              typeof window == 'undefined'
                ? 0
                : Math.floor(window.innerHeight / 2) - 100,
          },
          ...dragOptions,
        }}
        buttons={[{ value: 'OK', onClick: () => {} }]}
        hasWindowButton={false}
        buttonsAlignment={'center'}
        {...rest}
        ref={ref}
      >
        <Modal.Content className={styles.dialog}>
          <div className={styles.icon}>
            <RenderImage option={type} />
          </div>
          <div className={styles.message}>{message}</div>
        </Modal.Content>
      </Modal>
    );
  },
);
