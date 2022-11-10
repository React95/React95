import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Quartz101_32x32_4 from '../../png/Quartz101_32x32_4.png';
import Quartz101_16x16_4 from '../../png/Quartz101_16x16_4.png';

export const quartz101Data = {
  '32x32_4': {
    imageSrc: Quartz101_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Quartz101_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Quartz101Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Quartz101: React.FC<Quartz101Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = quartz101Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
