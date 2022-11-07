import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Jdbgmgr100_32x32_4 from '../../png/Jdbgmgr100_32x32_4.png';

export const jdbgmgr100Data = {
  '32x32_4': {
    imageSrc: Jdbgmgr100_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Jdbgmgr100Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Jdbgmgr100: React.FC<Jdbgmgr100Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = jdbgmgr100Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
