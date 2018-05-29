import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Text = styled.textarea`
  outline: none;
  border: none;
  resize: none;
  border-left: 1px solid #868a8e;
  border-top: 1px solid #868a8e;

  box-shadow: inset -1px -1px 0 0 #c3c7cb, inset 1px 1px 0 0 #000000,
    0.5px 0.5px 0 0.5px #ffffff;
`;

class TextArea extends React.Component {
  render() {
    const { children, value, rows, cols } = this.props;

    return (
      <Text className="text" rows={rows} cols={cols} value={value || children}>
        {children || value}
      </Text>
    );
  }
}

TextArea.propTypes = {
  value: PropTypes.string,
  rows: PropTypes.number,
  cols: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

TextArea.defaultProps = {
  value: '',
  rows: 10,
  cols: 50,
  children: null,
};

export default TextArea;
