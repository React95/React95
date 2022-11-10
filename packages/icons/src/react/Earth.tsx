import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Earth_32x32_4 from '../../png/Earth_32x32_4.png';

export const earthData = {
  '32x32_4': {
    imageSrc: Earth_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface EarthProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Earth: React.FC<EarthProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = earthData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
