import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';

const TextArea = forwardRef(({ rows, cols, ...rest }, ref) => (
  <Input {...rest} rows={rows} cols={cols} as="textarea" ref={ref} />
));

TextArea.propTypes = {
  rows: PropTypes.number,
  cols: PropTypes.number,
};

TextArea.defaultProps = {
  rows: 10,
  cols: 50,
};

export default TextArea;
