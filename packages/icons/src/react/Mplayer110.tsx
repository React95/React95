import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Mplayer110_32x32_4 from '../../png/Mplayer110_32x32_4.png';
import Mplayer110_16x16_4 from '../../png/Mplayer110_16x16_4.png';

export const mplayer110Data = {
  '32x32_4': {
    imageSrc: Mplayer110_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Mplayer110_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Mplayer110Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Mplayer110: React.FC<Mplayer110Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = mplayer110Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
