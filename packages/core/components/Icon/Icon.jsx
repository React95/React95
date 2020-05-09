import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import useIcon from './useIcon';

const I = styled.i.attrs((props) => ({
  style: {
    backgroundImage: props.url ? `url('${props.url}')` : undefined,
  },
}))`
  display: block;
  ${({ width, height }) => css`
    width: ${width}px;
    height: ${height}px;
  `}

  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

const Icon = ({ name, width, height, size, fallback, ...rest }) => {
  const { iconUrl, setIconUrl, availableIcons } = useIcon({
    name,
    size,
    fallback,
  });

  useEffect(() => {
    const icon = availableIcons.find((i) => i.size === size);

    setIconUrl(icon ? icon.url : undefined);
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
  size: PropTypes.oneOf([16, 24, 32, 48, 64, 128]),
};

Icon.defaultProps = {
  name: null,
  width: undefined,
  height: undefined,
  fallback: true,
  size: 32,
};

export default Icon;
