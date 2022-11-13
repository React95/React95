import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Pbrush1_32x32_4 from '../../png/Pbrush1_32x32_4.png';

export const pbrush1Data = {
  '32x32_4': {
    imageSrc: Pbrush1_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Pbrush1Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Pbrush1: React.FC<Pbrush1Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = pbrush1Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
