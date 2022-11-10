import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import D3Text100_32x32_1 from '../../png/D3Text100_32x32_1.png';
import D3Text100_32x32_4 from '../../png/D3Text100_32x32_4.png';

export const d3Text100Data = {
  '32x32_1': {
    imageSrc: D3Text100_32x32_1 as string,
    width: 32,
    height: 32,
  },

  '32x32_4': {
    imageSrc: D3Text100_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface D3Text100Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_1' | '32x32_4';
}

export const D3Text100: React.FC<D3Text100Props> = ({
  variant = '32x32_1',
  ...rest
}) => {
  const image = d3Text100Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
