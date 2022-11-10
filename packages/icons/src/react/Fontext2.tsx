import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Fontext2_32x32_4 from '../../png/Fontext2_32x32_4.png';
import Fontext2_16x16_4 from '../../png/Fontext2_16x16_4.png';

export const fontext2Data = {
  '32x32_4': {
    imageSrc: Fontext2_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Fontext2_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Fontext2Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Fontext2: React.FC<Fontext2Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = fontext2Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
