import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Grpconv101_32x32_4 from '../../png/Grpconv101_32x32_4.png';

export const grpconv101Data = {
  '32x32_4': {
    imageSrc: Grpconv101_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Grpconv101Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Grpconv101: React.FC<Grpconv101Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = grpconv101Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
