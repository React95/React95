import React, { forwardRef } from 'react';
import cn from 'classnames';

import { Frame, FrameProps } from '../Frame/Frame';
import { input as textarea } from '../Input/Input.css';

export type TextAreaProps = Omit<FrameProps<'textarea'>, 'as'>;

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>((rest, ref) => (
  <Frame
    {...rest}
    ref={ref}
    className={cn(textarea, rest.className)}
    as="textarea"
  />
));
