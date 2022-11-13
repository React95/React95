import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Awfxex32Info_32x32_4 from '../../png/Awfxex32Info_32x32_4.png';

export const awfxex32InfoData = {
  '32x32_4': {
    imageSrc: Awfxex32Info_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Awfxex32InfoProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Awfxex32Info: React.FC<Awfxex32InfoProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = awfxex32InfoData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
