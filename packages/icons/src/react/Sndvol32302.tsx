import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Sndvol32302_32x32_4 from '../../png/Sndvol32302_32x32_4.png';

export const sndvol32302Data = {
  '32x32_4': {
    imageSrc: Sndvol32302_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Sndvol32302Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Sndvol32302: React.FC<Sndvol32302Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = sndvol32302Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
