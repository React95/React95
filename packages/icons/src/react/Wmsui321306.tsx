import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Wmsui321306_32x32_4 from '../../png/Wmsui321306_32x32_4.png';
import Wmsui321306_32x32_1 from '../../png/Wmsui321306_32x32_1.png';
import Wmsui321306_32x16_1 from '../../png/Wmsui321306_32x16_1.png';

export const wmsui321306Data = {
  '32x32_4': {
    imageSrc: Wmsui321306_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '32x32_1': {
    imageSrc: Wmsui321306_32x32_1 as string,
    width: 32,
    height: 32,
  },

  '32x16_1': {
    imageSrc: Wmsui321306_32x16_1 as string,
    width: 32,
    height: 16,
  },
};

export interface Wmsui321306Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '32x32_1' | '32x16_1';
}

export const Wmsui321306: React.FC<Wmsui321306Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = wmsui321306Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
