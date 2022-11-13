import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Rnaui105_32x32_4 from '../../png/Rnaui105_32x32_4.png';

export const rnaui105Data = {
  '32x32_4': {
    imageSrc: Rnaui105_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Rnaui105Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Rnaui105: React.FC<Rnaui105Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = rnaui105Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
