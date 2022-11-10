import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Charmap1_32x32_4 from '../../png/Charmap1_32x32_4.png';
import Charmap1_16x16_4 from '../../png/Charmap1_16x16_4.png';

export const charmap1Data = {
  '32x32_4': {
    imageSrc: Charmap1_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Charmap1_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Charmap1Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Charmap1: React.FC<Charmap1Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = charmap1Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
