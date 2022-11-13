import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Url103_32x32_4 from '../../png/Url103_32x32_4.png';

export const url103Data = {
  '32x32_4': {
    imageSrc: Url103_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Url103Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Url103: React.FC<Url103Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = url103Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
