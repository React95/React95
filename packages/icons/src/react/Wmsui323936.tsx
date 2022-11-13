import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Wmsui323936_16x16_4 from '../../png/Wmsui323936_16x16_4.png';

export const wmsui323936Data = {
  '16x16_4': {
    imageSrc: Wmsui323936_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Wmsui323936Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Wmsui323936: React.FC<Wmsui323936Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = wmsui323936Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
