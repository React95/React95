import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Mplayer13_32x32_4 from '../../png/Mplayer13_32x32_4.png';
import Mplayer13_16x16_4 from '../../png/Mplayer13_16x16_4.png';

export const mplayer13Data = {
  '32x32_4': {
    imageSrc: Mplayer13_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Mplayer13_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Mplayer13Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Mplayer13: React.FC<Mplayer13Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = mplayer13Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
