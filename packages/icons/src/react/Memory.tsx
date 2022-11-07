import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Memory_32x32_4 from '../../png/Memory_32x32_4.png';
import Memory_16x16_4 from '../../png/Memory_16x16_4.png';

export const memoryData = {
  '32x32_4': {
    imageSrc: Memory_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Memory_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface MemoryProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Memory: React.FC<MemoryProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = memoryData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
