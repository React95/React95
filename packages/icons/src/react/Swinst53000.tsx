import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Swinst53000_32x32_4 from '../../png/Swinst53000_32x32_4.png';
import Swinst53000_16x16_4 from '../../png/Swinst53000_16x16_4.png';

export const swinst53000Data = {
  '32x32_4': {
    imageSrc: Swinst53000_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Swinst53000_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Swinst53000Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Swinst53000: React.FC<Swinst53000Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = swinst53000Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
