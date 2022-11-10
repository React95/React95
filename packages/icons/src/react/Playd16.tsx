import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Playd16_16x16_4 from '../../png/Playd16_16x16_4.png';

export const playd16Data = {
  '16x16_4': {
    imageSrc: Playd16_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Playd16Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Playd16: React.FC<Playd16Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = playd16Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
