import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Inetcpl1301_32x32_4 from '../../png/Inetcpl1301_32x32_4.png';
import Inetcpl1301_16x16_4 from '../../png/Inetcpl1301_16x16_4.png';

export const inetcpl1301Data = {
  '32x32_4': {
    imageSrc: Inetcpl1301_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Inetcpl1301_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Inetcpl1301Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Inetcpl1301: React.FC<Inetcpl1301Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = inetcpl1301Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
