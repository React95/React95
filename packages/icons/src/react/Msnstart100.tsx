import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Msnstart100_32x32_4 from '../../png/Msnstart100_32x32_4.png';

export const msnstart100Data = {
  '32x32_4': {
    imageSrc: Msnstart100_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Msnstart100Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Msnstart100: React.FC<Msnstart100Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = msnstart100Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
