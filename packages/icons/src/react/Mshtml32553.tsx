import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Mshtml32553_32x32_4 from '../../png/Mshtml32553_32x32_4.png';

export const mshtml32553Data = {
  '32x32_4': {
    imageSrc: Mshtml32553_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Mshtml32553Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Mshtml32553: React.FC<Mshtml32553Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = mshtml32553Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
