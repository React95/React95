import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import User5_32x32_1 from '../../png/User5_32x32_1.png';
import User5_32x32_4 from '../../png/User5_32x32_4.png';

export const user5Data = {
  '32x32_1': {
    imageSrc: User5_32x32_1 as string,
    width: 32,
    height: 32,
  },

  '32x32_4': {
    imageSrc: User5_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface User5Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_1' | '32x32_4';
}

export const User5: React.FC<User5Props> = ({
  variant = '32x32_1',
  ...rest
}) => {
  const image = user5Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
