import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Fte128_32x32_4 from '../../png/Fte128_32x32_4.png';
import Fte128_16x16_4 from '../../png/Fte128_16x16_4.png';

export const fte128Data = {
  '32x32_4': {
    imageSrc: Fte128_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Fte128_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Fte128Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Fte128: React.FC<Fte128Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = fte128Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
