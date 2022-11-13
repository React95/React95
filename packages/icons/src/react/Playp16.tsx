import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Playp16_16x16_4 from '../../png/Playp16_16x16_4.png';

export const playp16Data = {
  '16x16_4': {
    imageSrc: Playp16_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Playp16Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Playp16: React.FC<Playp16Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = playp16Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
