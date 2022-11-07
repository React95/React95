import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Msnsetup1_32x32_4 from '../../png/Msnsetup1_32x32_4.png';
import Msnsetup1_16x16_4 from '../../png/Msnsetup1_16x16_4.png';
import Msnsetup1_32x32_8 from '../../png/Msnsetup1_32x32_8.png';
import Msnsetup1_16x16_8 from '../../png/Msnsetup1_16x16_8.png';

export const msnsetup1Data = {
  '32x32_4': {
    imageSrc: Msnsetup1_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Msnsetup1_16x16_4 as string,
    width: 16,
    height: 16,
  },

  '32x32_8': {
    imageSrc: Msnsetup1_32x32_8 as string,
    width: 32,
    height: 32,
  },

  '16x16_8': {
    imageSrc: Msnsetup1_16x16_8 as string,
    width: 16,
    height: 16,
  },
};

export interface Msnsetup1Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4' | '32x32_8' | '16x16_8';
}

export const Msnsetup1: React.FC<Msnsetup1Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = msnsetup1Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
