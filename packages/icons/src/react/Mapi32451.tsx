import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Mapi32451_32x32_4 from '../../png/Mapi32451_32x32_4.png';

export const mapi32451Data = {
  '32x32_4': {
    imageSrc: Mapi32451_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Mapi32451Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Mapi32451: React.FC<Mapi32451Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = mapi32451Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
