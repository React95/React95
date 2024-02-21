import React, { forwardRef } from 'react';

import { Windows } from '../Modal/ModalContext';
import * as styles from './TaskBar.css';

export type WindowButtonProps = {
  small?: boolean;
  active?: boolean;
} & Pick<Windows, 'icon'> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

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
