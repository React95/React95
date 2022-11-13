import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Quikview4_32x32_4 from '../../png/Quikview4_32x32_4.png';

export const quikview4Data = {
  '32x32_4': {
    imageSrc: Quikview4_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Quikview4Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Quikview4: React.FC<Quikview4Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = quikview4Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
