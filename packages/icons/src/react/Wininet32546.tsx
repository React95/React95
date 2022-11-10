import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Wininet32546_32x32_4 from '../../png/Wininet32546_32x32_4.png';
import Wininet32546_16x16_4 from '../../png/Wininet32546_16x16_4.png';

export const wininet32546Data = {
  '32x32_4': {
    imageSrc: Wininet32546_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Wininet32546_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Wininet32546Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Wininet32546: React.FC<Wininet32546Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = wininet32546Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
