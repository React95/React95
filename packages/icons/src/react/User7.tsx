import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import User7_32x32_1 from '../../png/User7_32x32_1.png';
import User7_32x32_4 from '../../png/User7_32x32_4.png';

export const user7Data = {
  '32x32_1': {
    imageSrc: User7_32x32_1 as string,
    width: 32,
    height: 32,
  },

  '32x32_4': {
    imageSrc: User7_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface User7Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_1' | '32x32_4';
}

export const User7: React.FC<User7Props> = ({
  variant = '32x32_1',
  ...rest
}) => {
  const image = user7Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
