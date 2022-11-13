import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Mailnews16_32x32_4 from '../../png/Mailnews16_32x32_4.png';

export const mailnews16Data = {
  '32x32_4': {
    imageSrc: Mailnews16_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Mailnews16Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Mailnews16: React.FC<Mailnews16Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = mailnews16Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
