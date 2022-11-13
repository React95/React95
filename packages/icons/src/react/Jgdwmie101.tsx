import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Jgdwmie101_32x32_4 from '../../png/Jgdwmie101_32x32_4.png';
import Jgdwmie101_32x32_8 from '../../png/Jgdwmie101_32x32_8.png';
import Jgdwmie101_16x16_4 from '../../png/Jgdwmie101_16x16_4.png';

export const jgdwmie101Data = {
  '32x32_4': {
    imageSrc: Jgdwmie101_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '32x32_8': {
    imageSrc: Jgdwmie101_32x32_8 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Jgdwmie101_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Jgdwmie101Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '32x32_8' | '16x16_4';
}

export const Jgdwmie101: React.FC<Jgdwmie101Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = jgdwmie101Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
