import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Regedit204_16x16_4 from '../../png/Regedit204_16x16_4.png';

export const regedit204Data = {
  '16x16_4': {
    imageSrc: Regedit204_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Regedit204Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Regedit204: React.FC<Regedit204Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = regedit204Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
