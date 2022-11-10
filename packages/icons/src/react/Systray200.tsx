import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Systray200_32x32_4 from '../../png/Systray200_32x32_4.png';
import Systray200_16x16_4 from '../../png/Systray200_16x16_4.png';

export const systray200Data = {
  '32x32_4': {
    imageSrc: Systray200_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Systray200_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Systray200Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Systray200: React.FC<Systray200Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = systray200Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
