import React, { forwardRef } from 'react';
import { field, icon, label, text } from './RadioButton.css';

export type RadioButtonProps = React.InputHTMLAttributes<HTMLInputElement>;

export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  ({ children, disabled, ...props }, ref) => (
    <label className={label}>
      <input
        type="radio"
        disabled={disabled}
        className={field}
        ref={ref}
        {...props}
      />
      <span className={icon} />
      <span className={text}>{children}</span>
    </label>
  ),
);
