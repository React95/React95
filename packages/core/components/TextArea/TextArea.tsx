import * as React from 'react';
import { Frame, FrameProps } from '../Frame/Frame';
import { input as textarea } from '../Input/Input.css';

export type TextAreaProps = Omit<FrameProps<'textarea'>, 'as'>;

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (rest, ref) => (
    <Frame {...rest} ref={ref} className={textarea} as="textarea" />
  ),
);
