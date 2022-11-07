import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import MsDos_16x16_32 from '../../png/MsDos_16x16_32.png';
import MsDos_24x24_32 from '../../png/MsDos_24x24_32.png';
import MsDos_32x32_32 from '../../png/MsDos_32x32_32.png';
import MsDos_48x48_32 from '../../png/MsDos_48x48_32.png';
import MsDos_128x128_32 from '../../png/MsDos_128x128_32.png';

export const msDosData = {
  '16x16_32': {
    imageSrc: MsDos_16x16_32 as string,
    width: 16,
    height: 16,
  },

  '24x24_32': {
    imageSrc: MsDos_24x24_32 as string,
    width: 24,
    height: 24,
  },

  '32x32_32': {
    imageSrc: MsDos_32x32_32 as string,
    width: 32,
    height: 32,
  },

  '48x48_32': {
    imageSrc: MsDos_48x48_32 as string,
    width: 48,
    height: 48,
  },

  '128x128_32': {
    imageSrc: MsDos_128x128_32 as string,
    width: 128,
    height: 128,
  },
};

export interface MsDosProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_32' | '24x24_32' | '32x32_32' | '48x48_32' | '128x128_32';
}

export const MsDos: React.FC<MsDosProps> = ({
  variant = '16x16_32',
  ...rest
}) => {
  const image = msDosData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
