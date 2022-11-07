import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Rasapi32104_32x32_4 from '../../png/Rasapi32104_32x32_4.png';
import Rasapi32104_16x16_4 from '../../png/Rasapi32104_16x16_4.png';

export const rasapi32104Data = {
  '32x32_4': {
    imageSrc: Rasapi32104_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Rasapi32104_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Rasapi32104Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Rasapi32104: React.FC<Rasapi32104Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = rasapi32104Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
