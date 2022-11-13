import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Mshtml32534_32x32_4 from '../../png/Mshtml32534_32x32_4.png';

export const mshtml32534Data = {
  '32x32_4': {
    imageSrc: Mshtml32534_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Mshtml32534Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Mshtml32534: React.FC<Mshtml32534Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = mshtml32534Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
