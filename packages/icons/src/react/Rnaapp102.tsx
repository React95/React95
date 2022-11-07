import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Rnaapp102_32x32_4 from '../../png/Rnaapp102_32x32_4.png';
import Rnaapp102_16x16_4 from '../../png/Rnaapp102_16x16_4.png';

export const rnaapp102Data = {
  '32x32_4': {
    imageSrc: Rnaapp102_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Rnaapp102_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Rnaapp102Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Rnaapp102: React.FC<Rnaapp102Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = rnaapp102Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
