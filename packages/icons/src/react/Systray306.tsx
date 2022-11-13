import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Systray306_16x16_4 from '../../png/Systray306_16x16_4.png';
import Systray306_32x32_4 from '../../png/Systray306_32x32_4.png';

export const systray306Data = {
  '16x16_4': {
    imageSrc: Systray306_16x16_4 as string,
    width: 16,
    height: 16,
  },

  '32x32_4': {
    imageSrc: Systray306_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Systray306Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4' | '32x32_4';
}

export const Systray306: React.FC<Systray306Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = systray306Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
