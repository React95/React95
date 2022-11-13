import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Mspaint_32x32_4 from '../../png/Mspaint_32x32_4.png';
import Mspaint_16x16_4 from '../../png/Mspaint_16x16_4.png';

export const mspaintData = {
  '32x32_4': {
    imageSrc: Mspaint_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Mspaint_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface MspaintProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Mspaint: React.FC<MspaintProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = mspaintData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
