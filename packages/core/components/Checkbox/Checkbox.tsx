import React, { forwardRef } from 'react';

import * as styles from './Checkbox.css';

export type LabelProps = {
  disabled?: boolean;
};
export type CheckboxProps = {
  label?: string;
  children?: string;
  style?: React.CSSProperties;
} & LabelProps &
  React.HTMLProps<HTMLInputElement>;

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ children, style, label, disabled = false, ...rest }, ref) => (
    <label style={style} className={styles.label}>
      <input
        className={styles.field}
        type="checkbox"
        disabled={disabled}
        {...rest}
        ref={ref}
      />
      <span className={styles.icon} />
      <span className={styles.text}>{children || label}</span>
    </label>
  ),
);
