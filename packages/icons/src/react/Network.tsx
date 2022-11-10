import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Network_32x32_4 from '../../png/Network_32x32_4.png';
import Network_16x16_4 from '../../png/Network_16x16_4.png';

export const networkData = {
  '32x32_4': {
    imageSrc: Network_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Network_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface NetworkProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Network: React.FC<NetworkProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = networkData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
