import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Syncui120_32x32_4 from '../../png/Syncui120_32x32_4.png';
import Syncui120_16x16_4 from '../../png/Syncui120_16x16_4.png';

export const syncui120Data = {
  '32x32_4': {
    imageSrc: Syncui120_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Syncui120_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Syncui120Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Syncui120: React.FC<Syncui120Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = syncui120Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
