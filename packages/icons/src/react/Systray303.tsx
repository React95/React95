import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Systray303_32x32_4 from '../../png/Systray303_32x32_4.png';
import Systray303_16x16_4 from '../../png/Systray303_16x16_4.png';

export const systray303Data = {
  '32x32_4': {
    imageSrc: Systray303_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Systray303_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Systray303Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Systray303: React.FC<Systray303Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = systray303Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
