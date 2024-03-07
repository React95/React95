import React, { forwardRef } from 'react';
import * as styles from './Fieldset.css';
import { Frame, FrameProps } from '../Frame/Frame';

export type FieldSetProps = {
  legend?: string;
} & React.HTMLProps<HTMLFieldSetElement> &
  FrameProps;

export const Fieldset = forwardRef<HTMLFieldSetElement, FieldSetProps>(
  ({ legend, children, ...rest }, ref) => (
    <Frame as="fieldset" {...rest} ref={ref} className={styles.field}>
      {legend && <legend className={styles.legend}>{legend}</legend>}
      {children}
    </Frame>
  ),
);
