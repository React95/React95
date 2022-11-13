import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Quikview3_32x32_4 from '../../png/Quikview3_32x32_4.png';

export const quikview3Data = {
  '32x32_4': {
    imageSrc: Quikview3_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Quikview3Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Quikview3: React.FC<Quikview3Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = quikview3Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
