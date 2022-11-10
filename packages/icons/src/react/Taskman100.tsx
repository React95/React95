import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Taskman100_32x32_4 from '../../png/Taskman100_32x32_4.png';

export const taskman100Data = {
  '32x32_4': {
    imageSrc: Taskman100_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Taskman100Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Taskman100: React.FC<Taskman100Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = taskman100Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
