import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Wab321010_32x32_4 from '../../png/Wab321010_32x32_4.png';

export const wab321010Data = {
  '32x32_4': {
    imageSrc: Wab321010_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Wab321010Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Wab321010: React.FC<Wab321010Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = wab321010Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
