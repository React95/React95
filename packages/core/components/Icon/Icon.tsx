import * as React from 'react';
import styled from 'styled-components';
import icons from '@react95/icons';

import useIcon from './useIcon';

type IProps = {
  url: string;
  width: Number;
  height: Number;
};

const I = styled.i.attrs<IProps>(({ url }: Partial<IProps>) => ({
  style: {
    backgroundImage: url ? `url('${url}')` : 'none',
  },
}))`
  display: block;

  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  ${({ width, height }: Partial<IProps>) => `
    width: ${width}px;
    height: ${height}px;
  `}
`;

export type IconProps = {
  name?: keyof typeof icons;
  width?: number;
  height?: number;
  fallback?: Boolean;
  size?: number;
  bpp?: number;
  variant?: number;
} & React.HTMLAttributes<HTMLElement>;

const Icon: React.FC<IconProps> = ({
  name,
  width,
  height,
  size,
  fallback,
  bpp,
  variant,
  ...rest
}) => {
  const { iconUrl, changeIconUrl, availableIcons } = useIcon({
    name,
    size,
    fallback,
    bpp,
    variant,
  });

  React.useEffect(() => {
    const icon = availableIcons.find(i => i.size === size);

    changeIconUrl(icon ? icon.url : '');
  }, [size]);

  return (
    <I
      width={width || size}
      height={height || size}
      url={iconUrl}
      data-icon-name={name}
      {...rest}
    />
  );
};

Icon.defaultProps = {
  width: undefined,
  height: undefined,
  fallback: true,
  size: 32,
  /** Image color depth as bits per pixel. */
  bpp: 4,
  variant: 1,
};

export default Icon;
