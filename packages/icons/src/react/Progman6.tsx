import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Progman6_32x32_1 from '../../png/Progman6_32x32_1.png';
import Progman6_32x32_4 from '../../png/Progman6_32x32_4.png';

export const progman6Data = {
  '32x32_1': {
    imageSrc: Progman6_32x32_1 as string,
    width: 32,
    height: 32,
  },

  '32x32_4': {
    imageSrc: Progman6_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Progman6Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_1' | '32x32_4';
}

export const Progman6: React.FC<Progman6Props> = ({
  variant = '32x32_1',
  ...rest
}) => {
  const image = progman6Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
