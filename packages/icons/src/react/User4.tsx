import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import User4_32x32_1 from '../../png/User4_32x32_1.png';
import User4_32x32_4 from '../../png/User4_32x32_4.png';

export const user4Data = {
  '32x32_1': {
    imageSrc: User4_32x32_1 as string,
    width: 32,
    height: 32,
  },

  '32x32_4': {
    imageSrc: User4_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface User4Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_1' | '32x32_4';
}

export const User4: React.FC<User4Props> = ({
  variant = '32x32_1',
  ...rest
}) => {
  const image = user4Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
