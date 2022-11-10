import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Packager1_32x32_1 from '../../png/Packager1_32x32_1.png';
import Packager1_32x32_4 from '../../png/Packager1_32x32_4.png';

export const packager1Data = {
  '32x32_1': {
    imageSrc: Packager1_32x32_1 as string,
    width: 32,
    height: 32,
  },

  '32x32_4': {
    imageSrc: Packager1_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Packager1Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_1' | '32x32_4';
}

export const Packager1: React.FC<Packager1Props> = ({
  variant = '32x32_1',
  ...rest
}) => {
  const image = packager1Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
