import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Mshtml32549_32x32_4 from '../../png/Mshtml32549_32x32_4.png';
import Mshtml32549_16x16_4 from '../../png/Mshtml32549_16x16_4.png';

export const mshtml32549Data = {
  '32x32_4': {
    imageSrc: Mshtml32549_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Mshtml32549_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Mshtml32549Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Mshtml32549: React.FC<Mshtml32549Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = mshtml32549Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
