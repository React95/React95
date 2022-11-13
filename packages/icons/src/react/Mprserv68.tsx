import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Mprserv68_32x32_4 from '../../png/Mprserv68_32x32_4.png';

export const mprserv68Data = {
  '32x32_4': {
    imageSrc: Mprserv68_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Mprserv68Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Mprserv68: React.FC<Mprserv68Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = mprserv68Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
