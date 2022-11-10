import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Expostrt128_32x32_4 from '../../png/Expostrt128_32x32_4.png';
import Expostrt128_16x16_4 from '../../png/Expostrt128_16x16_4.png';

export const expostrt128Data = {
  '32x32_4': {
    imageSrc: Expostrt128_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Expostrt128_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Expostrt128Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Expostrt128: React.FC<Expostrt128Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = expostrt128Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
