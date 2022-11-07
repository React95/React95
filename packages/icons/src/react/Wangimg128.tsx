import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Wangimg128_32x32_4 from '../../png/Wangimg128_32x32_4.png';
import Wangimg128_16x16_4 from '../../png/Wangimg128_16x16_4.png';

export const wangimg128Data = {
  '32x32_4': {
    imageSrc: Wangimg128_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Wangimg128_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Wangimg128Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Wangimg128: React.FC<Wangimg128Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = wangimg128Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
