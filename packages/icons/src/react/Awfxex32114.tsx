import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Awfxex32114_32x32_4 from '../../png/Awfxex32114_32x32_4.png';

export const awfxex32114Data = {
  '32x32_4': {
    imageSrc: Awfxex32114_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Awfxex32114Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Awfxex32114: React.FC<Awfxex32114Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = awfxex32114Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
