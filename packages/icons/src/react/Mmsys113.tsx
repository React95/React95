import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Mmsys113_32x32_4 from '../../png/Mmsys113_32x32_4.png';
import Mmsys113_16x16_4 from '../../png/Mmsys113_16x16_4.png';

export const mmsys113Data = {
  '32x32_4': {
    imageSrc: Mmsys113_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Mmsys113_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Mmsys113Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Mmsys113: React.FC<Mmsys113Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = mmsys113Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
