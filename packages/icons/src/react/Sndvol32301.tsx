import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Sndvol32301_32x32_4 from '../../png/Sndvol32301_32x32_4.png';

export const sndvol32301Data = {
  '32x32_4': {
    imageSrc: Sndvol32301_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Sndvol32301Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Sndvol32301: React.FC<Sndvol32301Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = sndvol32301Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
