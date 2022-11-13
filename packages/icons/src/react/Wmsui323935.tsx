import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Wmsui323935_16x16_4 from '../../png/Wmsui323935_16x16_4.png';

export const wmsui323935Data = {
  '16x16_4': {
    imageSrc: Wmsui323935_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Wmsui323935Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Wmsui323935: React.FC<Wmsui323935Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = wmsui323935Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
