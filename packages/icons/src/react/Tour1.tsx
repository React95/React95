import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Tour1_32x32_4 from '../../png/Tour1_32x32_4.png';

export const tour1Data = {
  '32x32_4': {
    imageSrc: Tour1_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Tour1Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Tour1: React.FC<Tour1Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = tour1Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
