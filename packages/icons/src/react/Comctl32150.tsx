import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Comctl32150_32x32_1 from '../../png/Comctl32150_32x32_1.png';

export const comctl32150Data = {
  '32x32_1': {
    imageSrc: Comctl32150_32x32_1 as string,
    width: 32,
    height: 32,
  },
};

export interface Comctl32150Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_1';
}

export const Comctl32150: React.FC<Comctl32150Props> = ({
  variant = '32x32_1',
  ...rest
}) => {
  const image = comctl32150Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
