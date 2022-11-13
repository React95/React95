import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Wab321013_32x32_4 from '../../png/Wab321013_32x32_4.png';
import Wab321013_16x16_4 from '../../png/Wab321013_16x16_4.png';

export const wab321013Data = {
  '32x32_4': {
    imageSrc: Wab321013_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Wab321013_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Wab321013Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Wab321013: React.FC<Wab321013Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = wab321013Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
