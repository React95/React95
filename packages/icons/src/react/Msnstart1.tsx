import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Msnstart1_32x32_4 from '../../png/Msnstart1_32x32_4.png';
import Msnstart1_16x16_4 from '../../png/Msnstart1_16x16_4.png';
import Msnstart1_32x32_8 from '../../png/Msnstart1_32x32_8.png';
import Msnstart1_16x16_8 from '../../png/Msnstart1_16x16_8.png';

export const msnstart1Data = {
  '32x32_4': {
    imageSrc: Msnstart1_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Msnstart1_16x16_4 as string,
    width: 16,
    height: 16,
  },

  '32x32_8': {
    imageSrc: Msnstart1_32x32_8 as string,
    width: 32,
    height: 32,
  },

  '16x16_8': {
    imageSrc: Msnstart1_16x16_8 as string,
    width: 16,
    height: 16,
  },
};

export interface Msnstart1Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4' | '32x32_8' | '16x16_8';
}

export const Msnstart1: React.FC<Msnstart1Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = msnstart1Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
