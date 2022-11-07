import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Mmsys112_32x32_4 from '../../png/Mmsys112_32x32_4.png';
import Mmsys112_16x16_4 from '../../png/Mmsys112_16x16_4.png';

export const mmsys112Data = {
  '32x32_4': {
    imageSrc: Mmsys112_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Mmsys112_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Mmsys112Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Mmsys112: React.FC<Mmsys112Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = mmsys112Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
