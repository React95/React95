import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Mshtml32528_48x48_8 from '../../png/Mshtml32528_48x48_8.png';
import Mshtml32528_32x32_8 from '../../png/Mshtml32528_32x32_8.png';
import Mshtml32528_16x16_8 from '../../png/Mshtml32528_16x16_8.png';
import Mshtml32528_16x16_4 from '../../png/Mshtml32528_16x16_4.png';
import Mshtml32528_32x32_4 from '../../png/Mshtml32528_32x32_4.png';
import Mshtml32528_48x48_4 from '../../png/Mshtml32528_48x48_4.png';

export const mshtml32528Data = {
  '48x48_8': {
    imageSrc: Mshtml32528_48x48_8 as string,
    width: 48,
    height: 48,
  },

  '32x32_8': {
    imageSrc: Mshtml32528_32x32_8 as string,
    width: 32,
    height: 32,
  },

  '16x16_8': {
    imageSrc: Mshtml32528_16x16_8 as string,
    width: 16,
    height: 16,
  },

  '16x16_4': {
    imageSrc: Mshtml32528_16x16_4 as string,
    width: 16,
    height: 16,
  },

  '32x32_4': {
    imageSrc: Mshtml32528_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '48x48_4': {
    imageSrc: Mshtml32528_48x48_4 as string,
    width: 48,
    height: 48,
  },
};

export interface Mshtml32528Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '48x48_8' | '32x32_8' | '16x16_8' | '16x16_4' | '32x32_4' | '48x48_4';
}

export const Mshtml32528: React.FC<Mshtml32528Props> = ({
  variant = '48x48_8',
  ...rest
}) => {
  const image = mshtml32528Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
