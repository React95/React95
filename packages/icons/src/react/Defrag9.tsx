import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Defrag9_32x32_4 from '../../png/Defrag9_32x32_4.png';

export const defrag9Data = {
  '32x32_4': {
    imageSrc: Defrag9_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Defrag9Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Defrag9: React.FC<Defrag9Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = defrag9Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
