import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Systray221_16x16_4 from '../../png/Systray221_16x16_4.png';

export const systray221Data = {
  '16x16_4': {
    imageSrc: Systray221_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Systray221Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Systray221: React.FC<Systray221Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = systray221Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
