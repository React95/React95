import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Wmsui325901_32x32_4 from '../../png/Wmsui325901_32x32_4.png';
import Wmsui325901_16x16_4 from '../../png/Wmsui325901_16x16_4.png';

export const wmsui325901Data = {
  '32x32_4': {
    imageSrc: Wmsui325901_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Wmsui325901_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Wmsui325901Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Wmsui325901: React.FC<Wmsui325901Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = wmsui325901Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
