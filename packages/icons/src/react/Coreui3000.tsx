import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Coreui3000_32x32_4 from '../../png/Coreui3000_32x32_4.png';
import Coreui3000_16x16_4 from '../../png/Coreui3000_16x16_4.png';

export const coreui3000Data = {
  '32x32_4': {
    imageSrc: Coreui3000_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Coreui3000_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Coreui3000Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Coreui3000: React.FC<Coreui3000Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = coreui3000Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
