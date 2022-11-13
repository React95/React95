import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Powercfg211_32x32_4 from '../../png/Powercfg211_32x32_4.png';
import Powercfg211_16x16_4 from '../../png/Powercfg211_16x16_4.png';

export const powercfg211Data = {
  '32x32_4': {
    imageSrc: Powercfg211_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Powercfg211_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Powercfg211Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Powercfg211: React.FC<Powercfg211Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = powercfg211Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
