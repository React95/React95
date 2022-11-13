import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Inetcpl1302_32x32_4 from '../../png/Inetcpl1302_32x32_4.png';

export const inetcpl1302Data = {
  '32x32_4': {
    imageSrc: Inetcpl1302_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Inetcpl1302Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Inetcpl1302: React.FC<Inetcpl1302Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = inetcpl1302Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
