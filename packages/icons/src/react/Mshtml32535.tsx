import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Mshtml32535_32x32_4 from '../../png/Mshtml32535_32x32_4.png';

export const mshtml32535Data = {
  '32x32_4': {
    imageSrc: Mshtml32535_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Mshtml32535Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Mshtml32535: React.FC<Mshtml32535Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = mshtml32535Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
