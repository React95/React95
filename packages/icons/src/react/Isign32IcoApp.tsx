import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Isign32IcoApp_32x32_4 from '../../png/Isign32IcoApp_32x32_4.png';
import Isign32IcoApp_16x16_4 from '../../png/Isign32IcoApp_16x16_4.png';

export const isign32IcoAppData = {
  '32x32_4': {
    imageSrc: Isign32IcoApp_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Isign32IcoApp_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Isign32IcoAppProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Isign32IcoApp: React.FC<Isign32IcoAppProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = isign32IcoAppData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
