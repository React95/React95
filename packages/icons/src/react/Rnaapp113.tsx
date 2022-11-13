import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Rnaapp113_16x16_4 from '../../png/Rnaapp113_16x16_4.png';

export const rnaapp113Data = {
  '16x16_4': {
    imageSrc: Rnaapp113_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Rnaapp113Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Rnaapp113: React.FC<Rnaapp113Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = rnaapp113Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
