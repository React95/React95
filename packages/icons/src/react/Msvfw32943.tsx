import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Msvfw32943_32x32_1 from '../../png/Msvfw32943_32x32_1.png';
import Msvfw32943_32x32_4 from '../../png/Msvfw32943_32x32_4.png';

export const msvfw32943Data = {
  '32x32_1': {
    imageSrc: Msvfw32943_32x32_1 as string,
    width: 32,
    height: 32,
  },

  '32x32_4': {
    imageSrc: Msvfw32943_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Msvfw32943Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_1' | '32x32_4';
}

export const Msvfw32943: React.FC<Msvfw32943Props> = ({
  variant = '32x32_1',
  ...rest
}) => {
  const image = msvfw32943Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
