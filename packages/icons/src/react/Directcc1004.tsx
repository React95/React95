import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Directcc1004_32x32_4 from '../../png/Directcc1004_32x32_4.png';

export const directcc1004Data = {
  '32x32_4': {
    imageSrc: Directcc1004_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Directcc1004Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Directcc1004: React.FC<Directcc1004Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = directcc1004Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
