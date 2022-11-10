import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Password100_32x32_4 from '../../png/Password100_32x32_4.png';

export const password100Data = {
  '32x32_4': {
    imageSrc: Password100_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Password100Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Password100: React.FC<Password100Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = password100Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
