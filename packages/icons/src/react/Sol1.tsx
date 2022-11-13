import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Sol1_32x32_4 from '../../png/Sol1_32x32_4.png';
import Sol1_16x16_4 from '../../png/Sol1_16x16_4.png';

export const sol1Data = {
  '32x32_4': {
    imageSrc: Sol1_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Sol1_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Sol1Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Sol1: React.FC<Sol1Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = sol1Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
