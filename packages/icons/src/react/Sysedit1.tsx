import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Sysedit1_32x32_4 from '../../png/Sysedit1_32x32_4.png';

export const sysedit1Data = {
  '32x32_4': {
    imageSrc: Sysedit1_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Sysedit1Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Sysedit1: React.FC<Sysedit1Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = sysedit1Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
