import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Msrating105_32x32_4 from '../../png/Msrating105_32x32_4.png';

export const msrating105Data = {
  '32x32_4': {
    imageSrc: Msrating105_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Msrating105Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Msrating105: React.FC<Msrating105Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = msrating105Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
