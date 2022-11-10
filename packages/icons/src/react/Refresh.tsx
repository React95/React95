import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Refresh_16x16_4 from '../../png/Refresh_16x16_4.png';

export const refreshData = {
  '16x16_4': {
    imageSrc: Refresh_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface RefreshProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Refresh: React.FC<RefreshProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = refreshData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
