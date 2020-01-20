import React from "react";
import PropTypes from "prop-types";
import Input from "../Input";

const TextArea = ({ rows, cols, ...rest }) => (
  <Input {...rest} rows={rows} cols={cols} as="textarea" />
);

TextArea.propTypes = {
  rows: PropTypes.number,
  cols: PropTypes.number
};

TextArea.defaultProps = {
  rows: 10,
  cols: 50
};

export default TextArea;
