import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Grpconv100_32x32_1 from '../../png/Grpconv100_32x32_1.png';
import Grpconv100_32x32_4 from '../../png/Grpconv100_32x32_4.png';

export const grpconv100Data = {
  '32x32_1': {
    imageSrc: Grpconv100_32x32_1 as string,
    width: 32,
    height: 32,
  },

  '32x32_4': {
    imageSrc: Grpconv100_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Grpconv100Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_1' | '32x32_4';
}

export const Grpconv100: React.FC<Grpconv100Props> = ({
  variant = '32x32_1',
  ...rest
}) => {
  const image = grpconv100Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
