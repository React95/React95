import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Inetcfg2303_32x32_4 from '../../png/Inetcfg2303_32x32_4.png';

export const inetcfg2303Data = {
  '32x32_4': {
    imageSrc: Inetcfg2303_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Inetcfg2303Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Inetcfg2303: React.FC<Inetcfg2303Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = inetcfg2303Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
