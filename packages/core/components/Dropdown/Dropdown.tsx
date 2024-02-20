import React, { forwardRef } from 'react';
import cn from 'classnames';

import { wrapper, select } from './Dropdown.css';
import { Frame, FrameProps } from '../Frame/Frame';
import { sprinkles } from '../Frame/sprinkles.css';

const defaultOptions = [
  '',
  'C:\\Documents and Settings',
  'C:\\Documents and Settings\\Documents',
  'iexplorer.exe',
];

export type DropdownProps = {
  options?: Array<string | number>;
} & React.HTMLAttributes<HTMLSelectElement> &
  Omit<FrameProps<'select'>, 'as'>;

export const Dropdown = forwardRef<HTMLSelectElement, DropdownProps>(
  ({ options = defaultOptions, ...rest }, ref) => {
    const { style, otherProps, className } = sprinkles(rest);

    return (
      <Frame style={style} className={cn(wrapper, className)}>
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
