import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Controls3000_32x32_4 from '../../png/Controls3000_32x32_4.png';
import Controls3000_16x16_4 from '../../png/Controls3000_16x16_4.png';

export const controls3000Data = {
  '32x32_4': {
    imageSrc: Controls3000_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Controls3000_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Controls3000Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Controls3000: React.FC<Controls3000Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = controls3000Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
