import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import User6_32x32_1 from '../../png/User6_32x32_1.png';
import User6_32x32_4 from '../../png/User6_32x32_4.png';
import User6_16x16_4 from '../../png/User6_16x16_4.png';

export const user6Data = {
  '32x32_1': {
    imageSrc: User6_32x32_1 as string,
    width: 32,
    height: 32,
  },

  '32x32_4': {
    imageSrc: User6_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: User6_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface User6Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_1' | '32x32_4' | '16x16_4';
}

export const User6: React.FC<User6Props> = ({
  variant = '32x32_1',
  ...rest
}) => {
  const image = user6Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
