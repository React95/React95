import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Msrating109_32x32_4 from '../../png/Msrating109_32x32_4.png';
import Msrating109_16x16_4 from '../../png/Msrating109_16x16_4.png';

export const msrating109Data = {
  '32x32_4': {
    imageSrc: Msrating109_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Msrating109_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Msrating109Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Msrating109: React.FC<Msrating109Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = msrating109Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
