import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Mshtml32551_32x32_4 from '../../png/Mshtml32551_32x32_4.png';
import Mshtml32551_16x16_4 from '../../png/Mshtml32551_16x16_4.png';

export const mshtml32551Data = {
  '32x32_4': {
    imageSrc: Mshtml32551_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Mshtml32551_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Mshtml32551Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Mshtml32551: React.FC<Mshtml32551Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = mshtml32551Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
