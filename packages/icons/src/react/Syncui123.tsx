import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Syncui123_32x32_4 from '../../png/Syncui123_32x32_4.png';

export const syncui123Data = {
  '32x32_4': {
    imageSrc: Syncui123_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Syncui123Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Syncui123: React.FC<Syncui123Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = syncui123Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
