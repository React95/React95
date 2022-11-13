import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Cdplayer110_32x32_4 from '../../png/Cdplayer110_32x32_4.png';

export const cdplayer110Data = {
  '32x32_4': {
    imageSrc: Cdplayer110_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Cdplayer110Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Cdplayer110: React.FC<Cdplayer110Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = cdplayer110Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
