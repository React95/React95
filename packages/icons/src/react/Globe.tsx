import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Globe_32x32_4 from '../../png/Globe_32x32_4.png';
import Globe_16x16_4 from '../../png/Globe_16x16_4.png';

export const globeData = {
  '32x32_4': {
    imageSrc: Globe_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Globe_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface GlobeProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Globe: React.FC<GlobeProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = globeData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
