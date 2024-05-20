import React, { forwardRef } from 'react';
import type { HTMLProps } from 'react';
import * as styles from './Fieldset.css';
import { Frame, FrameProps } from '../Frame/Frame';

export type FieldSetProps = {
  legend?: string;
} & HTMLProps<HTMLFieldSetElement> &
  Omit<FrameProps<'fieldset'>, 'as'>;

export const Fieldset = forwardRef<HTMLFieldSetElement, FieldSetProps>(
  ({ legend, children, ...rest }, ref) => (
    <Frame {...rest} as="fieldset" ref={ref} className={styles.field}>
      {legend && <legend className={styles.legend}>{legend}</legend>}
      {children}
    </Frame>
  ),
);
