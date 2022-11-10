import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Awfxcg321301_32x32_4 from '../../png/Awfxcg321301_32x32_4.png';
import Awfxcg321301_16x16_4 from '../../png/Awfxcg321301_16x16_4.png';

export const awfxcg321301Data = {
  '32x32_4': {
    imageSrc: Awfxcg321301_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Awfxcg321301_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Awfxcg321301Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Awfxcg321301: React.FC<Awfxcg321301Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = awfxcg321301Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
