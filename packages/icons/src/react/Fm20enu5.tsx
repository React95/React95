import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Fm20enu5_32x32_4 from '../../png/Fm20enu5_32x32_4.png';

export const fm20enu5Data = {
  '32x32_4': {
    imageSrc: Fm20enu5_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Fm20enu5Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Fm20enu5: React.FC<Fm20enu5Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = fm20enu5Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
