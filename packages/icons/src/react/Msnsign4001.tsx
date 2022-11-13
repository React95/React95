import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Msnsign4001_32x32_4 from '../../png/Msnsign4001_32x32_4.png';
import Msnsign4001_32x32_1 from '../../png/Msnsign4001_32x32_1.png';

export const msnsign4001Data = {
  '32x32_4': {
    imageSrc: Msnsign4001_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '32x32_1': {
    imageSrc: Msnsign4001_32x32_1 as string,
    width: 32,
    height: 32,
  },
};

export interface Msnsign4001Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '32x32_1';
}

export const Msnsign4001: React.FC<Msnsign4001Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = msnsign4001Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
