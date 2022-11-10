import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Inetcpl1313_48x48_8 from '../../png/Inetcpl1313_48x48_8.png';
import Inetcpl1313_32x32_8 from '../../png/Inetcpl1313_32x32_8.png';
import Inetcpl1313_16x16_8 from '../../png/Inetcpl1313_16x16_8.png';
import Inetcpl1313_16x16_4 from '../../png/Inetcpl1313_16x16_4.png';
import Inetcpl1313_32x32_4 from '../../png/Inetcpl1313_32x32_4.png';
import Inetcpl1313_48x48_4 from '../../png/Inetcpl1313_48x48_4.png';

export const inetcpl1313Data = {
  '48x48_8': {
    imageSrc: Inetcpl1313_48x48_8 as string,
    width: 48,
    height: 48,
  },

  '32x32_8': {
    imageSrc: Inetcpl1313_32x32_8 as string,
    width: 32,
    height: 32,
  },

  '16x16_8': {
    imageSrc: Inetcpl1313_16x16_8 as string,
    width: 16,
    height: 16,
  },

  '16x16_4': {
    imageSrc: Inetcpl1313_16x16_4 as string,
    width: 16,
    height: 16,
  },

  '32x32_4': {
    imageSrc: Inetcpl1313_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '48x48_4': {
    imageSrc: Inetcpl1313_48x48_4 as string,
    width: 48,
    height: 48,
  },
};

export interface Inetcpl1313Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '48x48_8' | '32x32_8' | '16x16_8' | '16x16_4' | '32x32_4' | '48x48_4';
}

export const Inetcpl1313: React.FC<Inetcpl1313Props> = ({
  variant = '48x48_8',
  ...rest
}) => {
  const image = inetcpl1313Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
