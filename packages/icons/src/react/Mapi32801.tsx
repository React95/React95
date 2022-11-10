import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Mapi32801_32x32_4 from '../../png/Mapi32801_32x32_4.png';
import Mapi32801_16x16_4 from '../../png/Mapi32801_16x16_4.png';
import Mapi32801_48x48_4 from '../../png/Mapi32801_48x48_4.png';

export const mapi32801Data = {
  '32x32_4': {
    imageSrc: Mapi32801_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Mapi32801_16x16_4 as string,
    width: 16,
    height: 16,
  },

  '48x48_4': {
    imageSrc: Mapi32801_48x48_4 as string,
    width: 48,
    height: 48,
  },
};

export interface Mapi32801Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4' | '48x48_4';
}

export const Mapi32801: React.FC<Mapi32801Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = mapi32801Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
