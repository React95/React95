import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Mmsys101_32x32_4 from '../../png/Mmsys101_32x32_4.png';
import Mmsys101_16x16_4 from '../../png/Mmsys101_16x16_4.png';

export const mmsys101Data = {
  '32x32_4': {
    imageSrc: Mmsys101_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Mmsys101_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Mmsys101Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Mmsys101: React.FC<Mmsys101Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = mmsys101Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
