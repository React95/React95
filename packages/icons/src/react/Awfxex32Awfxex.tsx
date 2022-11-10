import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Awfxex32Awfxex_32x32_4 from '../../png/Awfxex32Awfxex_32x32_4.png';
import Awfxex32Awfxex_16x16_4 from '../../png/Awfxex32Awfxex_16x16_4.png';

export const awfxex32AwfxexData = {
  '32x32_4': {
    imageSrc: Awfxex32Awfxex_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Awfxex32Awfxex_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Awfxex32AwfxexProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Awfxex32Awfxex: React.FC<Awfxex32AwfxexProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = awfxex32AwfxexData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
