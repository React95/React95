import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Mprserv120_48x48_4 from '../../png/Mprserv120_48x48_4.png';

export const mprserv120Data = {
  '48x48_4': {
    imageSrc: Mprserv120_48x48_4 as string,
    width: 48,
    height: 48,
  },
};

export interface Mprserv120Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '48x48_4';
}

export const Mprserv120: React.FC<Mprserv120Props> = ({
  variant = '48x48_4',
  ...rest
}) => {
  const image = mprserv120Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
