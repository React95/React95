import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Msacm3210_32x32_4 from '../../png/Msacm3210_32x32_4.png';

export const msacm3210Data = {
  '32x32_4': {
    imageSrc: Msacm3210_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Msacm3210Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Msacm3210: React.FC<Msacm3210Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = msacm3210Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
