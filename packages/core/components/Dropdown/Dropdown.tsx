import React, { forwardRef } from 'react';

import { wrapper, select } from './Dropdown.css';
import { Frame, FrameProps } from '../Frame/Frame';

const defaultOptions = [
  '',
  'C:\\Documents and Settings',
  'C:\\Documents and Settings\\Documents',
  'iexplorer.exe',
];

export type DropdownProps = {
  options?: Array<string | number>;
} & React.HTMLAttributes<HTMLSelectElement> &
  FrameProps;

export const Dropdown = forwardRef<HTMLSelectElement, DropdownProps>(
  ({ options = defaultOptions, ...rest }, ref) => (
    <Frame className={wrapper} {...rest}>
      <select
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
    </Frame>
  ),
);
