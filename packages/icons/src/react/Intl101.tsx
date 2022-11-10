import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Intl101_32x32_4 from '../../png/Intl101_32x32_4.png';
import Intl101_16x16_4 from '../../png/Intl101_16x16_4.png';

export const intl101Data = {
  '32x32_4': {
    imageSrc: Intl101_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Intl101_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Intl101Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Intl101: React.FC<Intl101Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = intl101Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
