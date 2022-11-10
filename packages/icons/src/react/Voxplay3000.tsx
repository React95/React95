import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Voxplay3000_32x32_4 from '../../png/Voxplay3000_32x32_4.png';
import Voxplay3000_16x16_4 from '../../png/Voxplay3000_16x16_4.png';

export const voxplay3000Data = {
  '32x32_4': {
    imageSrc: Voxplay3000_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Voxplay3000_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Voxplay3000Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Voxplay3000: React.FC<Voxplay3000Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = voxplay3000Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
