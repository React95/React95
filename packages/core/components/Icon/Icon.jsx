import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import icons from '@react95/icons';
import ico from 'icojs';

const MIME_TYPE = 'image/png';

const size = ({ width, height }) => css`
  width: ${width}px;
  height: ${height}px;
`;

const I = styled.i.attrs((props) => ({
  style: {
    backgroundImage: `url('${props.url}')`,
  },
}))`
  display: block;
  ${size}

  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

function icoParse(file) {
  if (ico.isICO(file)) {
    return ico.parse(file);
  }

  return [];
}

const Icon = ({ name, width, height, size, ...rest }) => {
  const [rIcons, setRIcons] = useState([{}]);
  const [iconUrl, setIconUrl] = useState('');

  useEffect(() => {
    (async function fetchIcon() {
      const response = await fetch(icons[name]);
      const iconBuffer = await response.arrayBuffer();

      const allIcons = await icoParse(iconBuffer);

      const iconsToRender = allIcons.map((i) => ({
        size: i.width,
        url: URL.createObjectURL(new Blob([i.buffer], { type: MIME_TYPE })),
        bit: i.bbt,
      }));

      const match = iconsToRender.find((i) => i.size === size);
      const url = match ? match.url : 'none';

      setIconUrl(url);
      setRIcons(iconsToRender);
    })();
  }, []);

  useEffect(() => {
    const icon = rIcons.find((i) => i.size === size);

    setIconUrl(icon ? icon.url : 'none');
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
  size: PropTypes.oneOf([16, 24, 32, 48, 64, 128]),
};

Icon.defaultProps = {
  name: null,
  width: 32,
  height: 32,
  size: 32,
};

export default Icon;
