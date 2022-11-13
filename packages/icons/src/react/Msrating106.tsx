import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Msrating106_32x32_4 from '../../png/Msrating106_32x32_4.png';
import Msrating106_16x16_4 from '../../png/Msrating106_16x16_4.png';

export const msrating106Data = {
  '32x32_4': {
    imageSrc: Msrating106_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Msrating106_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Msrating106Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Msrating106: React.FC<Msrating106Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = msrating106Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
