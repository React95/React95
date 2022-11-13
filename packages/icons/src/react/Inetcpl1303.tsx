import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Inetcpl1303_32x32_4 from '../../png/Inetcpl1303_32x32_4.png';

export const inetcpl1303Data = {
  '32x32_4': {
    imageSrc: Inetcpl1303_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Inetcpl1303Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Inetcpl1303: React.FC<Inetcpl1303Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = inetcpl1303Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
