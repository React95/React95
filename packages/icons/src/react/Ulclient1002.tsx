import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Ulclient1002_32x32_4 from '../../png/Ulclient1002_32x32_4.png';
import Ulclient1002_16x16_4 from '../../png/Ulclient1002_16x16_4.png';

export const ulclient1002Data = {
  '32x32_4': {
    imageSrc: Ulclient1002_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Ulclient1002_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Ulclient1002Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Ulclient1002: React.FC<Ulclient1002Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = ulclient1002Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
