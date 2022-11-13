import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Syncui125_32x32_4 from '../../png/Syncui125_32x32_4.png';

export const syncui125Data = {
  '32x32_4': {
    imageSrc: Syncui125_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Syncui125Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Syncui125: React.FC<Syncui125Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = syncui125Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
