import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Filexfer129_32x32_4 from '../../png/Filexfer129_32x32_4.png';

export const filexfer129Data = {
  '32x32_4': {
    imageSrc: Filexfer129_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Filexfer129Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Filexfer129: React.FC<Filexfer129Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = filexfer129Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
