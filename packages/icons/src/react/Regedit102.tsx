import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Regedit102_32x32_4 from '../../png/Regedit102_32x32_4.png';

export const regedit102Data = {
  '32x32_4': {
    imageSrc: Regedit102_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Regedit102Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Regedit102: React.FC<Regedit102Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = regedit102Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
