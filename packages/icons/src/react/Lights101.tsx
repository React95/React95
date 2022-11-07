import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Lights101_16x16_4 from '../../png/Lights101_16x16_4.png';

export const lights101Data = {
  '16x16_4': {
    imageSrc: Lights101_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Lights101Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Lights101: React.FC<Lights101Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = lights101Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
