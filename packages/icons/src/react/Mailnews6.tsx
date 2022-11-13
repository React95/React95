import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Mailnews6_32x32_4 from '../../png/Mailnews6_32x32_4.png';

export const mailnews6Data = {
  '32x32_4': {
    imageSrc: Mailnews6_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Mailnews6Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Mailnews6: React.FC<Mailnews6Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = mailnews6Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
