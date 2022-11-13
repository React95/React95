import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import ParaBul_16x16_4 from '../../png/ParaBul_16x16_4.png';

export const paraBulData = {
  '16x16_4': {
    imageSrc: ParaBul_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface ParaBulProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const ParaBul: React.FC<ParaBulProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = paraBulData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
