import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Defrag5_32x32_4 from '../../png/Defrag5_32x32_4.png';
import Defrag5_16x16_4 from '../../png/Defrag5_16x16_4.png';

export const defrag5Data = {
  '32x32_4': {
    imageSrc: Defrag5_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Defrag5_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Defrag5Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Defrag5: React.FC<Defrag5Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = defrag5Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
