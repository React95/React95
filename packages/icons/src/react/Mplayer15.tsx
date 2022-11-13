import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Mplayer15_32x32_4 from '../../png/Mplayer15_32x32_4.png';
import Mplayer15_16x16_4 from '../../png/Mplayer15_16x16_4.png';

export const mplayer15Data = {
  '32x32_4': {
    imageSrc: Mplayer15_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Mplayer15_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Mplayer15Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Mplayer15: React.FC<Mplayer15Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = mplayer15Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
