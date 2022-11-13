import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Wmsui323934_16x16_4 from '../../png/Wmsui323934_16x16_4.png';
import Wmsui323934_32x32_4 from '../../png/Wmsui323934_32x32_4.png';

export const wmsui323934Data = {
  '16x16_4': {
    imageSrc: Wmsui323934_16x16_4 as string,
    width: 16,
    height: 16,
  },

  '32x32_4': {
    imageSrc: Wmsui323934_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Wmsui323934Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4' | '32x32_4';
}

export const Wmsui323934: React.FC<Wmsui323934Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = wmsui323934Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
