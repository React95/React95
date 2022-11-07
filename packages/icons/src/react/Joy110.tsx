import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Joy110_32x32_4 from '../../png/Joy110_32x32_4.png';

export const joy110Data = {
  '32x32_4': {
    imageSrc: Joy110_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Joy110Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Joy110: React.FC<Joy110Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = joy110Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
