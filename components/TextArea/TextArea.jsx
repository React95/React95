import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Text = styled.textarea`
  border: none;
  max-height: 100%;
  border-left: 1px solid #868a8e;
  border-top: 1px solid #868a8e;

  font-size: 14px;
  line-height: 18px;

  outline: none;
  resize: none;

  box-shadow: inset -1px -1px 0 0 #c3c7cb, inset 1px 1px 0 0 #000000,
    0.5px 0.5px 0 0.5px #ffffff;
`;

const TextArea = ({ rows, cols, ...rest }) => (
  <Text {...rest} rows={rows} cols={cols} />
);

TextArea.propTypes = {
  rows: PropTypes.number,
  cols: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

TextArea.defaultProps = {
  rows: 10,
  cols: 50,
  children: null,
};

export default TextArea;
