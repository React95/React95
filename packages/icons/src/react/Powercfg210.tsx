import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Powercfg210_32x32_4 from '../../png/Powercfg210_32x32_4.png';
import Powercfg210_16x16_4 from '../../png/Powercfg210_16x16_4.png';

export const powercfg210Data = {
  '32x32_4': {
    imageSrc: Powercfg210_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Powercfg210_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Powercfg210Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Powercfg210: React.FC<Powercfg210Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = powercfg210Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
