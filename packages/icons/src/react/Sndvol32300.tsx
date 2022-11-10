import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Sndvol32300_32x32_4 from '../../png/Sndvol32300_32x32_4.png';
import Sndvol32300_16x16_4 from '../../png/Sndvol32300_16x16_4.png';

export const sndvol32300Data = {
  '32x32_4': {
    imageSrc: Sndvol32300_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Sndvol32300_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Sndvol32300Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Sndvol32300: React.FC<Sndvol32300Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = sndvol32300Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
