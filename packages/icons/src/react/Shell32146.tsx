import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Shell32146_32x32_4 from '../../png/Shell32146_32x32_4.png';

export const shell32146Data = {
  '32x32_4': {
    imageSrc: Shell32146_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Shell32146Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Shell32146: React.FC<Shell32146Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = shell32146Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
