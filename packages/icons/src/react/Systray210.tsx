import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Systray210_16x16_4 from '../../png/Systray210_16x16_4.png';

export const systray210Data = {
  '16x16_4': {
    imageSrc: Systray210_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Systray210Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Systray210: React.FC<Systray210Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = systray210Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
