import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Text = styled.textarea`
  outline: none;
  border: none;
  resize: none;

  box-shadow: inset 1px 1px 0 0 #000000, inset 0 0 0 1px #868a8e,
    0 0 0 1px #ffffff;
`;

class TextArea extends React.Component {
  render() {
    const { children, value, rows, cols } = this.props;

    return (
      <Text className="text" row={rows} cols={cols} value={value || children}>
        {children || value}
      </Text>
    );
  }
}

TextArea.propTypes = {
  value: PropTypes.string,
  row: PropTypes.number,
  cols: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

TextArea.defaultProps = {
  value: '',
  rows: 50,
  cols: 10,
  children: null,
};

export default TextArea;
