import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Ccapi104_32x32_4 from '../../png/Ccapi104_32x32_4.png';
import Ccapi104_16x16_4 from '../../png/Ccapi104_16x16_4.png';

export const ccapi104Data = {
  '32x32_4': {
    imageSrc: Ccapi104_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Ccapi104_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Ccapi104Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Ccapi104: React.FC<Ccapi104Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = ccapi104Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
