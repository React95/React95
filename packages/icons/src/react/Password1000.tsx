import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Password1000_32x32_4 from '../../png/Password1000_32x32_4.png';

export const password1000Data = {
  '32x32_4': {
    imageSrc: Password1000_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Password1000Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Password1000: React.FC<Password1000Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = password1000Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
