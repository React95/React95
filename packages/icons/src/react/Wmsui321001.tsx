import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Wmsui321001_32x32_4 from '../../png/Wmsui321001_32x32_4.png';
import Wmsui321001_16x16_4 from '../../png/Wmsui321001_16x16_4.png';

export const wmsui321001Data = {
  '32x32_4': {
    imageSrc: Wmsui321001_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Wmsui321001_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Wmsui321001Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Wmsui321001: React.FC<Wmsui321001Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = wmsui321001Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
