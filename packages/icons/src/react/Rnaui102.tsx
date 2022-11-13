import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Rnaui102_32x32_4 from '../../png/Rnaui102_32x32_4.png';
import Rnaui102_16x16_4 from '../../png/Rnaui102_16x16_4.png';

export const rnaui102Data = {
  '32x32_4': {
    imageSrc: Rnaui102_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Rnaui102_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Rnaui102Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Rnaui102: React.FC<Rnaui102Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = rnaui102Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
