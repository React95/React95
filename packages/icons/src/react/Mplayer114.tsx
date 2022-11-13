import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Mplayer114_32x32_4 from '../../png/Mplayer114_32x32_4.png';
import Mplayer114_16x16_4 from '../../png/Mplayer114_16x16_4.png';

export const mplayer114Data = {
  '32x32_4': {
    imageSrc: Mplayer114_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Mplayer114_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Mplayer114Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Mplayer114: React.FC<Mplayer114Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = mplayer114Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
