import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Filexfer128_32x32_4 from '../../png/Filexfer128_32x32_4.png';
import Filexfer128_16x16_4 from '../../png/Filexfer128_16x16_4.png';

export const filexfer128Data = {
  '32x32_4': {
    imageSrc: Filexfer128_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Filexfer128_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Filexfer128Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Filexfer128: React.FC<Filexfer128Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = filexfer128Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
