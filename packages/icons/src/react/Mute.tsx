import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Mute_32x32_4 from '../../png/Mute_32x32_4.png';
import Mute_16x16_4 from '../../png/Mute_16x16_4.png';

export const muteData = {
  '32x32_4': {
    imageSrc: Mute_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Mute_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface MuteProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Mute: React.FC<MuteProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = muteData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
