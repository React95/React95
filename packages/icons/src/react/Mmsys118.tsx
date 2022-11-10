import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Mmsys118_32x32_4 from '../../png/Mmsys118_32x32_4.png';
import Mmsys118_16x16_4 from '../../png/Mmsys118_16x16_4.png';

export const mmsys118Data = {
  '32x32_4': {
    imageSrc: Mmsys118_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Mmsys118_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Mmsys118Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Mmsys118: React.FC<Mmsys118Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = mmsys118Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
