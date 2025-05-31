import React, { forwardRef } from 'react';
import type { InputHTMLAttributes } from 'react';
import { field, icon, label, text } from './RadioButton.css';
import cn from 'classnames';

export type RadioButtonProps = InputHTMLAttributes<HTMLInputElement>;

export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  ({ children, disabled, ...props }, ref) => (
    <label className={cn(label, props.className)}>
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
