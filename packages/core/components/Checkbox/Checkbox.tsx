import React, { forwardRef } from 'react';
import type { CSSProperties, HTMLProps } from 'react';

import * as styles from './Checkbox.css';
import cn from 'classnames';

export type LabelProps = {
  disabled?: boolean;
};
export type CheckboxProps = {
  label?: string;
  children?: string;
  style?: CSSProperties;
} & LabelProps &
  HTMLProps<HTMLInputElement>;

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ children, style, label, disabled = false, className, ...rest }, ref) => (
    <label style={style} className={cn(styles.label, className)}>
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
