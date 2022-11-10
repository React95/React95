import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Mplayer16_32x32_4 from '../../png/Mplayer16_32x32_4.png';

export const mplayer16Data = {
  '32x32_4': {
    imageSrc: Mplayer16_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Mplayer16Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Mplayer16: React.FC<Mplayer16Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = mplayer16Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
