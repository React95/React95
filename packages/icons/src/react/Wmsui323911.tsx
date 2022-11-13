import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Wmsui323911_32x32_4 from '../../png/Wmsui323911_32x32_4.png';
import Wmsui323911_16x16_4 from '../../png/Wmsui323911_16x16_4.png';

export const wmsui323911Data = {
  '32x32_4': {
    imageSrc: Wmsui323911_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Wmsui323911_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Wmsui323911Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Wmsui323911: React.FC<Wmsui323911Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = wmsui323911Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
