import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import What_16x16_4 from '../../png/What_16x16_4.png';

export const whatData = {
  '16x16_4': {
    imageSrc: What_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface WhatProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const What: React.FC<WhatProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = whatData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
