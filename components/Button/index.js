import React from 'react';
import PropTypes from 'prop-types';
import styled, { injectGlobal } from 'styled-components';

import woff2 from '../../assets/Pixelade.woff2';
import woff from '../../assets/Pixelade.woff';
import pattern from '../../assets/pattern/dropdown.png';

import Btn from '../shared-style/Btn';

injectGlobal`
  @font-face {
    font-family: 'Pixelade';
    src: url('${woff2}') format('woff2'),
        url('${woff}') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  body {
    background-color: #5aa;
  }

  * {
    font-family: 'Pixelade';
  }

  ::-webkit-scrollbar {
    width: 15px;
    background: url('${pattern}');
    background-size: 3px 3px;
  }

  ::-webkit-scrollbar-button:vertical:increment {
    background-color: #c3c7cb;
    box-shadow: inset 1px 1px 0px 1px #ffffff, inset 0 0 0 1px #868a8e,
      1px 1px 0 1px #000;
  }
  ::-webkit-scrollbar-button:vertical:decrement {
    background-color: #c3c7cb;
    box-shadow: inset 1px 1px 0px 1px #ffffff, inset 0 0 0 1px #868a8e,
      1px 1px 0 1px #000;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #c3c7cb;
    box-shadow: inset 1px 1px 0px 1px #ffffff, inset 0 0 0 1px #868a8e,
      1px 1px 0 1px #000;
  }
  ::-webkit-scrollbar-track-piece {
    background: transparent;
  }
`;

class Button extends React.Component {
  render() {
    const { children, value, onClick } = this.props;

    return (
      <Btn value={value || children} onClick={onClick}>
        {children || value}
      </Btn>
    );
  }
}

Button.propTypes = {
  value: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  value: 'Ok',
  children: null,
  onClick: () => {},
};

export default Button;
