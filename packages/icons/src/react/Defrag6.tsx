import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Defrag6_32x32_4 from '../../png/Defrag6_32x32_4.png';
import Defrag6_16x16_4 from '../../png/Defrag6_16x16_4.png';

export const defrag6Data = {
  '32x32_4': {
    imageSrc: Defrag6_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Defrag6_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Defrag6Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Defrag6: React.FC<Defrag6Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = defrag6Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
