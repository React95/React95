import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Rnaapp114_16x16_4 from '../../png/Rnaapp114_16x16_4.png';

export const rnaapp114Data = {
  '16x16_4': {
    imageSrc: Rnaapp114_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Rnaapp114Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Rnaapp114: React.FC<Rnaapp114Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = rnaapp114Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
