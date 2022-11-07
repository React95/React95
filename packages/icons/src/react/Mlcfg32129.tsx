import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Mlcfg32129_32x32_4 from '../../png/Mlcfg32129_32x32_4.png';
import Mlcfg32129_16x16_4 from '../../png/Mlcfg32129_16x16_4.png';

export const mlcfg32129Data = {
  '32x32_4': {
    imageSrc: Mlcfg32129_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Mlcfg32129_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Mlcfg32129Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Mlcfg32129: React.FC<Mlcfg32129Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = mlcfg32129Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
