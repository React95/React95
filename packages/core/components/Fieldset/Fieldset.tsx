import React, { forwardRef } from 'react';
import type { HTMLProps } from 'react';
import * as styles from './Fieldset.css';
import { Frame, FrameProps } from '../Frame/Frame';
import cn from 'classnames';

export type FieldSetProps = {
  legend?: string;
} & HTMLProps<HTMLFieldSetElement> &
  Omit<FrameProps<'fieldset'>, 'as'>;

export const Fieldset = forwardRef<HTMLFieldSetElement, FieldSetProps>(
  ({ legend, children, className, ...rest }, ref) => (
    <Frame
      {...rest}
      as="fieldset"
      ref={ref}
      className={cn(styles.field, className)}
    >
      {legend && <legend className={styles.legend}>{legend}</legend>}
      {children}
    </Frame>
  ),
);
