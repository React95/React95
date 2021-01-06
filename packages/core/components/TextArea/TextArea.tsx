import React, { forwardRef } from 'react';
import styled from '@xstyled/styled-components';
import border from '../shared-style/Border';
import {
  padding,
  PaddingProps,
  borders,
  BorderProps,
  shadow,
  ShadowProps,
} from 'styled-system';

export type TextAreaProps = PaddingProps &
  BorderProps &
  ShadowProps &
  React.HTMLProps<HTMLTextAreaElement>;

const TextAreaComponent = styled.textarea<TextAreaProps>`
  outline: none;
  border: none;
  cursor: text;
  width: 100%;
  resize: none;
  padding: 3 3 5 3;

  ${padding}
  ${borders}
  ${shadow}
`;

const TextAreaWrapper = styled.div`
  display: flex;
  padding: 1px;
  ${border({ direction: 'intrude' })}
`;

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props, ref) => (
    <TextAreaWrapper>
      <TextAreaComponent {...props} as="textarea" ref={ref} />
    </TextAreaWrapper>
  ),
);

export default TextArea;
