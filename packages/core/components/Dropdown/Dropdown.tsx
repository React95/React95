import React, { forwardRef } from 'react';
import type { HTMLProps } from 'react';
import cn from 'classnames';

import { wrapper, select } from './Dropdown.css';
import { Frame, FrameProps } from '../Frame/Frame';
import { sprinkles } from '../Frame/Frame.css';

const defaultOptions = [
  '',
  'C:\\Documents and Settings',
  'C:\\Documents and Settings\\Documents',
  'iexplorer.exe',
];

export type DropdownProps = {
  options?: Array<string | number>;
} & HTMLProps<HTMLSelectElement> &
  Omit<FrameProps<'select'>, 'as'>;

export const Dropdown = forwardRef<HTMLSelectElement, DropdownProps>(
  ({ options = defaultOptions, ...rest }, ref) => {
    const { style, otherProps, className } = sprinkles(rest);

    return (
      <Frame
        style={style}
        className={cn(wrapper, className, otherProps.className)}
      >
        <select {...otherProps} className={cn(select)} ref={ref}>
          {options &&
            options.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
        </select>
      </Frame>
    );
  },
);
