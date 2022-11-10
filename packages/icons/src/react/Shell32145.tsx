import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Shell32145_32x32_4 from '../../png/Shell32145_32x32_4.png';

export const shell32145Data = {
  '32x32_4': {
    imageSrc: Shell32145_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Shell32145Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Shell32145: React.FC<Shell32145Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = shell32145Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
