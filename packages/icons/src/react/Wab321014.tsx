import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Wab321014_32x32_4 from '../../png/Wab321014_32x32_4.png';

export const wab321014Data = {
  '32x32_4': {
    imageSrc: Wab321014_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Wab321014Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Wab321014: React.FC<Wab321014Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = wab321014Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
