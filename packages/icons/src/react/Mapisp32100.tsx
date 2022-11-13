import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Mapisp32100_32x32_4 from '../../png/Mapisp32100_32x32_4.png';

export const mapisp32100Data = {
  '32x32_4': {
    imageSrc: Mapisp32100_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Mapisp32100Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Mapisp32100: React.FC<Mapisp32100Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = mapisp32100Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
