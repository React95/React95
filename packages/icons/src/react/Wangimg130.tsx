import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Wangimg130_32x32_4 from '../../png/Wangimg130_32x32_4.png';
import Wangimg130_16x16_4 from '../../png/Wangimg130_16x16_4.png';

export const wangimg130Data = {
  '32x32_4': {
    imageSrc: Wangimg130_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Wangimg130_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Wangimg130Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Wangimg130: React.FC<Wangimg130Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = wangimg130Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
