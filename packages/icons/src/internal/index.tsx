import React from 'react';
import { IconProps } from '../iconType';

interface IconComponentProps extends IconProps {
  width: string | number;
  height: string | number;
  src: string;
}

export const BaseIcon: React.FC<IconComponentProps> = ({
  width,
  height,
  src,
  ...rest
}) => {
  return <img width={width} height={height} {...rest} src={src} />;
};
