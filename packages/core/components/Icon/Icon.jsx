import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import icons from '@react95/icons';

const size = ({ width, height }) => css`
  width: ${width}px;
  height: ${height}px;
`;

const I = styled.i`
  display: block;
  ${size}

  background-image: url('${({ name }) => icons[name] || 'none'}');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

const Icon = ({ name, width, height, ...rest }) => (
  <I name={name} width={width} height={height} {...rest} />
);

Icon.propTypes = {
  name: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

Icon.defaultProps = {
  name: null,
  width: 32,
  height: 32,
};

export default Icon;
