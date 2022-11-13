import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Directcc1003_32x32_4 from '../../png/Directcc1003_32x32_4.png';

export const directcc1003Data = {
  '32x32_4': {
    imageSrc: Directcc1003_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Directcc1003Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Directcc1003: React.FC<Directcc1003Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = directcc1003Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
