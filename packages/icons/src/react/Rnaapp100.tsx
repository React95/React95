import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Rnaapp100_32x32_4 from '../../png/Rnaapp100_32x32_4.png';

export const rnaapp100Data = {
  '32x32_4': {
    imageSrc: Rnaapp100_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Rnaapp100Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Rnaapp100: React.FC<Rnaapp100Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = rnaapp100Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
