import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Wmsui322219_32x32_4 from '../../png/Wmsui322219_32x32_4.png';
import Wmsui322219_32x32_1 from '../../png/Wmsui322219_32x32_1.png';
import Wmsui322219_16x16_4 from '../../png/Wmsui322219_16x16_4.png';

export const wmsui322219Data = {
  '32x32_4': {
    imageSrc: Wmsui322219_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '32x32_1': {
    imageSrc: Wmsui322219_32x32_1 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Wmsui322219_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Wmsui322219Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '32x32_1' | '16x16_4';
}

export const Wmsui322219: React.FC<Wmsui322219Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = wmsui322219Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
