import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Quikview1_32x32_4 from '../../png/Quikview1_32x32_4.png';

export const quikview1Data = {
  '32x32_4': {
    imageSrc: Quikview1_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Quikview1Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Quikview1: React.FC<Quikview1Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = quikview1Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
