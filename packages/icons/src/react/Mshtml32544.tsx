import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Mshtml32544_16x16_4 from '../../png/Mshtml32544_16x16_4.png';

export const mshtml32544Data = {
  '16x16_4': {
    imageSrc: Mshtml32544_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Mshtml32544Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Mshtml32544: React.FC<Mshtml32544Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = mshtml32544Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
