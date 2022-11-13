import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import User3_32x32_1 from '../../png/User3_32x32_1.png';
import User3_32x32_4 from '../../png/User3_32x32_4.png';

export const user3Data = {
  '32x32_1': {
    imageSrc: User3_32x32_1 as string,
    width: 32,
    height: 32,
  },

  '32x32_4': {
    imageSrc: User3_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface User3Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_1' | '32x32_4';
}

export const User3: React.FC<User3Props> = ({
  variant = '32x32_1',
  ...rest
}) => {
  const image = user3Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
