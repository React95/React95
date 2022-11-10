import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Rnaapp112_16x16_4 from '../../png/Rnaapp112_16x16_4.png';

export const rnaapp112Data = {
  '16x16_4': {
    imageSrc: Rnaapp112_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Rnaapp112Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Rnaapp112: React.FC<Rnaapp112Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = rnaapp112Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
