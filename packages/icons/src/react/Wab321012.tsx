import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Wab321012_32x32_4 from '../../png/Wab321012_32x32_4.png';
import Wab321012_16x16_4 from '../../png/Wab321012_16x16_4.png';

export const wab321012Data = {
  '32x32_4': {
    imageSrc: Wab321012_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Wab321012_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Wab321012Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Wab321012: React.FC<Wab321012Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = wab321012Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
