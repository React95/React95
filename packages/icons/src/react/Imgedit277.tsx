import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Imgedit277_32x32_4 from '../../png/Imgedit277_32x32_4.png';

export const imgedit277Data = {
  '32x32_4': {
    imageSrc: Imgedit277_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Imgedit277Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Imgedit277: React.FC<Imgedit277Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = imgedit277Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
