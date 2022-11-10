import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Regedit205_16x16_4 from '../../png/Regedit205_16x16_4.png';

export const regedit205Data = {
  '16x16_4': {
    imageSrc: Regedit205_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Regedit205Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Regedit205: React.FC<Regedit205Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = regedit205Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
