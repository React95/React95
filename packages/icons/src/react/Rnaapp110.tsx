import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Rnaapp110_16x16_4 from '../../png/Rnaapp110_16x16_4.png';

export const rnaapp110Data = {
  '16x16_4': {
    imageSrc: Rnaapp110_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Rnaapp110Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Rnaapp110: React.FC<Rnaapp110Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = rnaapp110Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
