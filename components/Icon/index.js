import React from 'react';
import PropTypes from 'prop-types';
import styled, { injectGlobal } from 'styled-components';
import icons from './icons.js';

const I = styled.i`
  display: block;
  width: 30px;
  height: 32px;

  background-image: url('${({ name }) => icons[name] || 'none'}');
  background-repeat: no-repeat;
  background-position: center;
`;

class Icon extends React.Component {
  render() {
    const { name } = this.props;
    console.log(icons[name]);

    return <I name={name} />;
  }
}

Icon.propTypes = {
  name: PropTypes.string,
};

Icon.defaultProps = {
  name: null,
};

export default Icon;
