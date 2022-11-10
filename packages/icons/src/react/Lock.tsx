import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Lock_32x32_4 from '../../png/Lock_32x32_4.png';
import Lock_16x16_4 from '../../png/Lock_16x16_4.png';

export const lockData = {
  '32x32_4': {
    imageSrc: Lock_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Lock_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface LockProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Lock: React.FC<LockProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = lockData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
