import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import User1_32x32_4 from '../../png/User1_32x32_4.png';
import User1_22x22_4 from '../../png/User1_22x22_4.png';
import User1_16x16_4 from '../../png/User1_16x16_4.png';
import User1_14x14_4 from '../../png/User1_14x14_4.png';
import User1_12x12_4 from '../../png/User1_12x12_4.png';
import User1_10x10_4 from '../../png/User1_10x10_4.png';

export const user1Data = {
  '32x32_4': {
    imageSrc: User1_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '22x22_4': {
    imageSrc: User1_22x22_4 as string,
    width: 22,
    height: 22,
  },

  '16x16_4': {
    imageSrc: User1_16x16_4 as string,
    width: 16,
    height: 16,
  },

  '14x14_4': {
    imageSrc: User1_14x14_4 as string,
    width: 14,
    height: 14,
  },

  '12x12_4': {
    imageSrc: User1_12x12_4 as string,
    width: 12,
    height: 12,
  },

  '10x10_4': {
    imageSrc: User1_10x10_4 as string,
    width: 10,
    height: 10,
  },
};

export interface User1Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '22x22_4' | '16x16_4' | '14x14_4' | '12x12_4' | '10x10_4';
}

export const User1: React.FC<User1Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = user1Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
