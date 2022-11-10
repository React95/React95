import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Url1102_32x32_4 from '../../png/Url1102_32x32_4.png';
import Url1102_16x16_4 from '../../png/Url1102_16x16_4.png';

export const url1102Data = {
  '32x32_4': {
    imageSrc: Url1102_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Url1102_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Url1102Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Url1102: React.FC<Url1102Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = url1102Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
