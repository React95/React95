import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Drvspace1_32x32_4 from '../../png/Drvspace1_32x32_4.png';
import Drvspace1_16x16_4 from '../../png/Drvspace1_16x16_4.png';

export const drvspace1Data = {
  '32x32_4': {
    imageSrc: Drvspace1_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Drvspace1_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Drvspace1Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Drvspace1: React.FC<Drvspace1Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = drvspace1Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
