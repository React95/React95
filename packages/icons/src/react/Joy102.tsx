import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Joy102_32x32_4 from '../../png/Joy102_32x32_4.png';
import Joy102_48x48_4 from '../../png/Joy102_48x48_4.png';
import Joy102_16x16_4 from '../../png/Joy102_16x16_4.png';
import Joy102_32x32_8 from '../../png/Joy102_32x32_8.png';
import Joy102_48x48_8 from '../../png/Joy102_48x48_8.png';
import Joy102_16x16_8 from '../../png/Joy102_16x16_8.png';

export const joy102Data = {
  '32x32_4': {
    imageSrc: Joy102_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '48x48_4': {
    imageSrc: Joy102_48x48_4 as string,
    width: 48,
    height: 48,
  },

  '16x16_4': {
    imageSrc: Joy102_16x16_4 as string,
    width: 16,
    height: 16,
  },

  '32x32_8': {
    imageSrc: Joy102_32x32_8 as string,
    width: 32,
    height: 32,
  },

  '48x48_8': {
    imageSrc: Joy102_48x48_8 as string,
    width: 48,
    height: 48,
  },

  '16x16_8': {
    imageSrc: Joy102_16x16_8 as string,
    width: 16,
    height: 16,
  },
};

export interface Joy102Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '48x48_4' | '16x16_4' | '32x32_8' | '48x48_8' | '16x16_8';
}

export const Joy102: React.FC<Joy102Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = joy102Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
