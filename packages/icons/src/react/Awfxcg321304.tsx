import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Awfxcg321304_32x32_4 from '../../png/Awfxcg321304_32x32_4.png';
import Awfxcg321304_16x16_4 from '../../png/Awfxcg321304_16x16_4.png';

export const awfxcg321304Data = {
  '32x32_4': {
    imageSrc: Awfxcg321304_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Awfxcg321304_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Awfxcg321304Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Awfxcg321304: React.FC<Awfxcg321304Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = awfxcg321304Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
