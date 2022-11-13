import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Systray300_32x32_4 from '../../png/Systray300_32x32_4.png';
import Systray300_16x16_4 from '../../png/Systray300_16x16_4.png';

export const systray300Data = {
  '32x32_4': {
    imageSrc: Systray300_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Systray300_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Systray300Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Systray300: React.FC<Systray300Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = systray300Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
