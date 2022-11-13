import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Mmsys124_32x32_4 from '../../png/Mmsys124_32x32_4.png';

export const mmsys124Data = {
  '32x32_4': {
    imageSrc: Mmsys124_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Mmsys124Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Mmsys124: React.FC<Mmsys124Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = mmsys124Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
