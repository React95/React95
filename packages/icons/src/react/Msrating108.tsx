import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Msrating108_32x32_4 from '../../png/Msrating108_32x32_4.png';
import Msrating108_16x16_4 from '../../png/Msrating108_16x16_4.png';

export const msrating108Data = {
  '32x32_4': {
    imageSrc: Msrating108_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Msrating108_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Msrating108Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Msrating108: React.FC<Msrating108Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = msrating108Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
