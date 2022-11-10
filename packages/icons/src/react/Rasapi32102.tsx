import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Rasapi32102_32x32_4 from '../../png/Rasapi32102_32x32_4.png';

export const rasapi32102Data = {
  '32x32_4': {
    imageSrc: Rasapi32102_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Rasapi32102Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Rasapi32102: React.FC<Rasapi32102Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = rasapi32102Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
