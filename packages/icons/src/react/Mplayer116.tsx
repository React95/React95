import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Mplayer116_32x32_4 from '../../png/Mplayer116_32x32_4.png';

export const mplayer116Data = {
  '32x32_4': {
    imageSrc: Mplayer116_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Mplayer116Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Mplayer116: React.FC<Mplayer116Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = mplayer116Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
