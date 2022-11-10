import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Raplayer801_32x32_4 from '../../png/Raplayer801_32x32_4.png';

export const raplayer801Data = {
  '32x32_4': {
    imageSrc: Raplayer801_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Raplayer801Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Raplayer801: React.FC<Raplayer801Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = raplayer801Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
