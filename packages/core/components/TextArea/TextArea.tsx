import React, { forwardRef } from 'react';
import styled from '@xstyled/styled-components';
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

  padding: 3 3 5 3;

  border-top-width: 1;
  border-top-style: 1;
  border-top-color: ${({ theme }) => theme.colors.borderDarkest};
  
  border-right-width: 0;
  border-bottom-width: 0;

  border-left-width: 1;
  border-left-style: 1;
  border-left-color: ${({ theme }) => theme.colors.borderDarkest};
  
  box-shadow: input;

  ${padding}
  ${borders}
  ${shadow}
`;

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props, ref) => <TextAreaComponent {...props} as="textarea" ref={ref} />,
);

export default TextArea;
