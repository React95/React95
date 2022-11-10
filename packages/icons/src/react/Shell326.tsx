import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Shell326_32x32_4 from '../../png/Shell326_32x32_4.png';
import Shell326_16x16_4 from '../../png/Shell326_16x16_4.png';

export const shell326Data = {
  '32x32_4': {
    imageSrc: Shell326_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Shell326_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Shell326Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Shell326: React.FC<Shell326Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = shell326Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
