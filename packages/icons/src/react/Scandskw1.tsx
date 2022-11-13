import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Scandskw1_32x32_4 from '../../png/Scandskw1_32x32_4.png';
import Scandskw1_16x16_4 from '../../png/Scandskw1_16x16_4.png';

export const scandskw1Data = {
  '32x32_4': {
    imageSrc: Scandskw1_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Scandskw1_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Scandskw1Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Scandskw1: React.FC<Scandskw1Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = scandskw1Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
