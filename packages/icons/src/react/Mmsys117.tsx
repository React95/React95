import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Mmsys117_32x32_4 from '../../png/Mmsys117_32x32_4.png';
import Mmsys117_16x16_4 from '../../png/Mmsys117_16x16_4.png';

export const mmsys117Data = {
  '32x32_4': {
    imageSrc: Mmsys117_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Mmsys117_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Mmsys117Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Mmsys117: React.FC<Mmsys117Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = mmsys117Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
