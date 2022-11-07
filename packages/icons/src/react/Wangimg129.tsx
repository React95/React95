import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Wangimg129_32x32_4 from '../../png/Wangimg129_32x32_4.png';
import Wangimg129_16x16_4 from '../../png/Wangimg129_16x16_4.png';

export const wangimg129Data = {
  '32x32_4': {
    imageSrc: Wangimg129_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Wangimg129_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Wangimg129Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Wangimg129: React.FC<Wangimg129Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = wangimg129Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
