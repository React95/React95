import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Joy108_32x32_4 from '../../png/Joy108_32x32_4.png';
import Joy108_16x16_4 from '../../png/Joy108_16x16_4.png';

export const joy108Data = {
  '32x32_4': {
    imageSrc: Joy108_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Joy108_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Joy108Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Joy108: React.FC<Joy108Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = joy108Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
