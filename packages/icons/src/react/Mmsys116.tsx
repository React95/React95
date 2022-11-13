import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Mmsys116_32x32_4 from '../../png/Mmsys116_32x32_4.png';
import Mmsys116_16x16_4 from '../../png/Mmsys116_16x16_4.png';

export const mmsys116Data = {
  '32x32_4': {
    imageSrc: Mmsys116_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Mmsys116_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Mmsys116Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Mmsys116: React.FC<Mmsys116Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = mmsys116Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
