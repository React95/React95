import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Imgthumb10_32x32_4 from '../../png/Imgthumb10_32x32_4.png';

export const imgthumb10Data = {
  '32x32_4': {
    imageSrc: Imgthumb10_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Imgthumb10Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Imgthumb10: React.FC<Imgthumb10Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = imgthumb10Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
