import React, { forwardRef } from 'react';
import type { ElementType, ReactElement, ForwardedRef } from 'react';
import cn from 'classnames';

import {
  Frame,
  FrameProps,
  InferredElement,
  Polymorphic,
} from '../Frame/Frame';
import * as styles from './ProgressBar.css';

export type ProgressBarProps<TAs extends ElementType> = {
  percent?: number;
} & Polymorphic<TAs, FrameProps>;

export const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps<'div'>>(
  ({ width = '150px', percent = 0, ...rest }, ref) => (
    <Frame
      {...rest}
      width={width}
      className={cn(styles.wrapper, rest.className)}
      ref={ref}
    >
      <Frame className={styles.whiteBar} width={width}>{`${percent}%`}</Frame>
      <Frame className={styles.container} width={`${percent}%`}>
        <Frame className={styles.progress} width={width}>{`${percent}%`}</Frame>
      </Frame>
    </Frame>
  ),
) as <TAs extends ElementType = 'div'>(
  props: ProgressBarProps<TAs> & { ref?: ForwardedRef<InferredElement<TAs>> },
) => ReactElement;
