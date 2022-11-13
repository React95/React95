import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Syncui135_32x32_4 from '../../png/Syncui135_32x32_4.png';
import Syncui135_16x16_4 from '../../png/Syncui135_16x16_4.png';

export const syncui135Data = {
  '32x32_4': {
    imageSrc: Syncui135_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Syncui135_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Syncui135Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Syncui135: React.FC<Syncui135Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = syncui135Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
