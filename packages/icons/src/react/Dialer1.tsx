import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Dialer1_32x32_4 from '../../png/Dialer1_32x32_4.png';
import Dialer1_16x16_4 from '../../png/Dialer1_16x16_4.png';

export const dialer1Data = {
  '32x32_4': {
    imageSrc: Dialer1_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Dialer1_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Dialer1Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Dialer1: React.FC<Dialer1Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = dialer1Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
