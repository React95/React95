import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Wab321020_32x32_4 from '../../png/Wab321020_32x32_4.png';

export const wab321020Data = {
  '32x32_4': {
    imageSrc: Wab321020_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Wab321020Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Wab321020: React.FC<Wab321020Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = wab321020Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
