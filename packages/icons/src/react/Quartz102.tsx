import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Quartz102_32x32_4 from '../../png/Quartz102_32x32_4.png';
import Quartz102_16x16_4 from '../../png/Quartz102_16x16_4.png';

export const quartz102Data = {
  '32x32_4': {
    imageSrc: Quartz102_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Quartz102_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Quartz102Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Quartz102: React.FC<Quartz102Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = quartz102Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
