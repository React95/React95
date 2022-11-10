import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Msnsign100_32x32_4 from '../../png/Msnsign100_32x32_4.png';

export const msnsign100Data = {
  '32x32_4': {
    imageSrc: Msnsign100_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Msnsign100Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Msnsign100: React.FC<Msnsign100Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = msnsign100Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
