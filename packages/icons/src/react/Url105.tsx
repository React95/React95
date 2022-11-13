import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Url105_32x32_4 from '../../png/Url105_32x32_4.png';

export const url105Data = {
  '32x32_4': {
    imageSrc: Url105_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Url105Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Url105: React.FC<Url105Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = url105Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
