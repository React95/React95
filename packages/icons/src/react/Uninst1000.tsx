import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Uninst1000_32x32_4 from '../../png/Uninst1000_32x32_4.png';

export const uninst1000Data = {
  '32x32_4': {
    imageSrc: Uninst1000_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Uninst1000Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Uninst1000: React.FC<Uninst1000Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = uninst1000Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
