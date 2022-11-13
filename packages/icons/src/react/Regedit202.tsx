import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Regedit202_16x16_4 from '../../png/Regedit202_16x16_4.png';

export const regedit202Data = {
  '16x16_4': {
    imageSrc: Regedit202_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Regedit202Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Regedit202: React.FC<Regedit202Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = regedit202Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
