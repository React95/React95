import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Isign32100_32x32_4 from '../../png/Isign32100_32x32_4.png';

export const isign32100Data = {
  '32x32_4': {
    imageSrc: Isign32100_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Isign32100Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Isign32100: React.FC<Isign32100Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = isign32100Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
