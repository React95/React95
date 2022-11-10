import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Url102_32x32_4 from '../../png/Url102_32x32_4.png';
import Url102_16x16_4 from '../../png/Url102_16x16_4.png';

export const url102Data = {
  '32x32_4': {
    imageSrc: Url102_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Url102_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Url102Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Url102: React.FC<Url102Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = url102Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
