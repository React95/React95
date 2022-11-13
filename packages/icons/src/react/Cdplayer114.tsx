import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Cdplayer114_32x32_1 from '../../png/Cdplayer114_32x32_1.png';

export const cdplayer114Data = {
  '32x32_1': {
    imageSrc: Cdplayer114_32x32_1 as string,
    width: 32,
    height: 32,
  },
};

export interface Cdplayer114Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_1';
}

export const Cdplayer114: React.FC<Cdplayer114Props> = ({
  variant = '32x32_1',
  ...rest
}) => {
  const image = cdplayer114Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
