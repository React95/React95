import React, { forwardRef } from 'react';
import type { ButtonHTMLAttributes } from 'react';

import { ModalWindow } from '../shared/events';
import * as styles from './TaskBar.css';

export type WindowButtonProps = {
  small?: boolean;
  active?: boolean;
} & Pick<ModalWindow, 'icon'> &
  ButtonHTMLAttributes<HTMLButtonElement>;

export const WindowButton = forwardRef<HTMLButtonElement, WindowButtonProps>(
  ({ children, small = false, icon, active = false, ...props }, ref) => (
    <button
      className={styles.windowsButton({ active, small })}
      {...props}
      ref={ref}
    >
      <div className={styles.icon}>{icon}</div>
      {children}
    </button>
  ),
);
