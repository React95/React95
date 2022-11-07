import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Shell32143_32x32_4 from '../../png/Shell32143_32x32_4.png';

export const shell32143Data = {
  '32x32_4': {
    imageSrc: Shell32143_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Shell32143Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Shell32143: React.FC<Shell32143Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = shell32143Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
