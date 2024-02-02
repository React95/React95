import React, { forwardRef } from 'react';

import { wrapper, select } from './Dropdown.css';

const defaultOptions = [
  '',
  'C:\\Documents and Settings',
  'C:\\Documents and Settings\\Documents',
  'iexplorer.exe',
];

export type DropdownProps = {
  options?: Array<string | number>;
} & React.HTMLAttributes<HTMLSelectElement>;

export const Dropdown = forwardRef<HTMLSelectElement, DropdownProps>(
  ({ options = defaultOptions, ...rest }, ref) => (
    <div className={wrapper}>
      <select
        {...rest}
        className={[select, rest.className].filter(Boolean).join(' ')}
        ref={ref}
      >
        {options &&
          options.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
      </select>
    </div>
  ),
);
