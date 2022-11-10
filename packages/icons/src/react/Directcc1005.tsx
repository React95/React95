import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Directcc1005_32x32_4 from '../../png/Directcc1005_32x32_4.png';
import Directcc1005_16x16_4 from '../../png/Directcc1005_16x16_4.png';

export const directcc1005Data = {
  '32x32_4': {
    imageSrc: Directcc1005_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Directcc1005_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Directcc1005Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Directcc1005: React.FC<Directcc1005Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = directcc1005Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
