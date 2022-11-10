import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Mailnews9_32x32_4 from '../../png/Mailnews9_32x32_4.png';

export const mailnews9Data = {
  '32x32_4': {
    imageSrc: Mailnews9_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Mailnews9Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Mailnews9: React.FC<Mailnews9Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = mailnews9Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
