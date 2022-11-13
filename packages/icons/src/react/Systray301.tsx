import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Systray301_32x32_4 from '../../png/Systray301_32x32_4.png';
import Systray301_16x16_4 from '../../png/Systray301_16x16_4.png';

export const systray301Data = {
  '32x32_4': {
    imageSrc: Systray301_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Systray301_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Systray301Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Systray301: React.FC<Systray301Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = systray301Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
