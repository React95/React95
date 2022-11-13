import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Systray302_32x32_4 from '../../png/Systray302_32x32_4.png';
import Systray302_16x16_4 from '../../png/Systray302_16x16_4.png';

export const systray302Data = {
  '32x32_4': {
    imageSrc: Systray302_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Systray302_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Systray302Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Systray302: React.FC<Systray302Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = systray302Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
