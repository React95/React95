import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Network2_32x32_4 from '../../png/Network2_32x32_4.png';
import Network2_16x16_4 from '../../png/Network2_16x16_4.png';

export const network2Data = {
  '32x32_4': {
    imageSrc: Network2_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Network2_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Network2Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Network2: React.FC<Network2Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = network2Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
