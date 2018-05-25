import React from 'react';
import PropTypes from 'prop-types';

class TextArea extends React.Component {
  render() {
    const { children, value } = this.props;

    return (
      <textarea value={value || children}>
        {children || value}
      </textarea>
    );
  }
}

TextArea.propTypes = {
  value: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

TextArea.defaultProps = {
  value: 'Ok',
  children: null,
};

export default TextArea;
