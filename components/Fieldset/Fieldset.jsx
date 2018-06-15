import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Field = styled.fieldset`
  border-top-style: groove;
  border-top-width: 2px;
  border-top-color: #e6e6e6;

  border-left-style: groove;
  border-left-width: 2px;
  border-left-color: #e6e6e6;

  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: #848284;

  border-right-style: solid;
  border-right-width: 1px;
  border-right-color: #848284;

  box-shadow: 1px 1px 0 0 #e6e6e6 /* inset 1px 1px 0 0 #e6e6e6 */;
`;

const Fieldset = ({ legend, children, ...rest }) => (
  <Field {...rest}>
    {legend && <legend>{legend}</legend>}
    {children}
  </Field>
);

Fieldset.propTypes = {
  legend: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Fieldset;
