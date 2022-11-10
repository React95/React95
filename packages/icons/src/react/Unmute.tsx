import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Unmute_32x32_4 from '../../png/Unmute_32x32_4.png';
import Unmute_16x16_4 from '../../png/Unmute_16x16_4.png';

export const unmuteData = {
  '32x32_4': {
    imageSrc: Unmute_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Unmute_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface UnmuteProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Unmute: React.FC<UnmuteProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = unmuteData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
