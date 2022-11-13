import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import LoaderBat_32x32_4 from '../../png/LoaderBat_32x32_4.png';
import LoaderBat_16x16_4 from '../../png/LoaderBat_16x16_4.png';

export const loaderBatData = {
  '32x32_4': {
    imageSrc: LoaderBat_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: LoaderBat_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface LoaderBatProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const LoaderBat: React.FC<LoaderBatProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = loaderBatData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
