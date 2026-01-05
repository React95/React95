import React, { forwardRef, TextareaHTMLAttributes } from 'react';
import cn from 'classnames';

import { Frame, FrameProps } from '../Frame/Frame';
import { input as textarea } from '../Input/Input.css';

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> &
  Omit<FrameProps, 'as'>;

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (rest, ref) => (
    <Frame
      {...rest}
      ref={ref}
      className={cn(textarea, rest.className)}
      as="textarea"
    />
  ),
);
