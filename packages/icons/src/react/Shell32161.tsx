import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Shell32161_32x32_4 from '../../png/Shell32161_32x32_4.png';

export const shell32161Data = {
  '32x32_4': {
    imageSrc: Shell32161_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Shell32161Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Shell32161: React.FC<Shell32161Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = shell32161Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
