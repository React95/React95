import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Mailnews23_16x16_4 from '../../png/Mailnews23_16x16_4.png';

export const mailnews23Data = {
  '16x16_4': {
    imageSrc: Mailnews23_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Mailnews23Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Mailnews23: React.FC<Mailnews23Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = mailnews23Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
