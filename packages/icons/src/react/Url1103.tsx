import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Url1103_32x32_4 from '../../png/Url1103_32x32_4.png';

export const url1103Data = {
  '32x32_4': {
    imageSrc: Url1103_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Url1103Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Url1103: React.FC<Url1103Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = url1103Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
