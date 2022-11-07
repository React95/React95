import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Conflnk102_32x32_4 from '../../png/Conflnk102_32x32_4.png';
import Conflnk102_16x16_4 from '../../png/Conflnk102_16x16_4.png';

export const conflnk102Data = {
  '32x32_4': {
    imageSrc: Conflnk102_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Conflnk102_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Conflnk102Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Conflnk102: React.FC<Conflnk102Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = conflnk102Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
