import * as React from 'react';
import styled from '@xstyled/styled-components';

const Field = styled.fieldset`
  border-top-style: groove;
  border-top-width: 2;
  border-top-color: #e6e6e6;

  border-left-style: groove;
  border-left-width: 2;
  border-left-color: #e6e6e6;

  border-bottom-style: solid;
  border-bottom-width: 1;
  border-bottom-color: #848284;

  border-right-style: solid;
  border-right-width: 1;
  border-right-color: #848284;

  box-shadow: 1px 1px 0 0 #e6e6e6;
`;

const Legend = styled.legend`
  padding-left: 4px;
  padding-right: 1px;
`;

export type FieldSetProps = {
  legend?: String;
} & React.HTMLAttributes<HTMLFieldSetElement>;

const Fieldset: React.FC<FieldSetProps> = ({ legend, children, ...rest }) => (
  <Field {...rest}>
    {legend && <Legend>{legend}</Legend>}
    {children}
  </Field>
);

export default Fieldset;
