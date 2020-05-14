import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import useIcon from './useIcon';

const I = styled.i`
  display: block;

  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  ${({ width, height, url }) => css`
    width: ${width}px;
    height: ${height}px;
    background-image: ${url ? `url('${url}')` : 'none'};
  `}
`;

const Icon = ({ name, width, height, size, fallback, ...rest }) => {
  const { iconUrl, changeIconUrl, availableIcons } = useIcon({
    name,
    size,
    fallback,
  });

  useEffect(() => {
    const icon = availableIcons.find(i => i.size === size);

    changeIconUrl(icon ? icon.url : undefined);
  }, [size]);

  return (
    <I
      name={name}
      width={width || size}
      height={height || size}
      {...rest}
      url={iconUrl}
    />
  );
};

Icon.propTypes = {
  name: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  fallback: PropTypes.bool,
  size: PropTypes.number,
};

Icon.defaultProps = {
  name: null,
  width: undefined,
  height: undefined,
  fallback: true,
  size: 32,
};

export default Icon;
