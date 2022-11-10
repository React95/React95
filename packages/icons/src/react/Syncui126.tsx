import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Syncui126_32x32_4 from '../../png/Syncui126_32x32_4.png';

export const syncui126Data = {
  '32x32_4': {
    imageSrc: Syncui126_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Syncui126Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Syncui126: React.FC<Syncui126Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = syncui126Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
