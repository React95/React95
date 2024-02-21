import React, { forwardRef } from 'react';

import * as styles from './Checkbox.css';

export type LabelProps = {
  disabled?: boolean;
};
export type CheckboxProps = {
  label?: string;
  children?: string;
  checked?: boolean;
  style?: React.CSSProperties;
} & LabelProps &
  React.HTMLAttributes<HTMLInputElement>;

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ children, style, checked, label, disabled = false, ...rest }, ref) => (
    <label style={style} className={styles.label}>
      <input
        className={styles.field}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        {...rest}
        ref={ref}
      />
      <span className={styles.icon} />
      <span className={styles.text}>{children || label}</span>
    </label>
  ),
);
