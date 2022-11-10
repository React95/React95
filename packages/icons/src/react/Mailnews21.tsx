import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Mailnews21_32x32_4 from '../../png/Mailnews21_32x32_4.png';

export const mailnews21Data = {
  '32x32_4': {
    imageSrc: Mailnews21_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Mailnews21Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Mailnews21: React.FC<Mailnews21Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = mailnews21Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
