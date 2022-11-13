import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Mplayer14_32x32_4 from '../../png/Mplayer14_32x32_4.png';
import Mplayer14_16x16_4 from '../../png/Mplayer14_16x16_4.png';

export const mplayer14Data = {
  '32x32_4': {
    imageSrc: Mplayer14_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Mplayer14_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Mplayer14Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Mplayer14: React.FC<Mplayer14Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = mplayer14Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
