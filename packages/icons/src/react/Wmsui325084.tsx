import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Wmsui325084_32x32_4 from '../../png/Wmsui325084_32x32_4.png';

export const wmsui325084Data = {
  '32x32_4': {
    imageSrc: Wmsui325084_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Wmsui325084Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Wmsui325084: React.FC<Wmsui325084Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = wmsui325084Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
