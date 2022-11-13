import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Sysedit2_64x64_1 from '../../png/Sysedit2_64x64_1.png';

export const sysedit2Data = {
  '64x64_1': {
    imageSrc: Sysedit2_64x64_1 as string,
    width: 64,
    height: 64,
  },
};

export interface Sysedit2Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '64x64_1';
}

export const Sysedit2: React.FC<Sysedit2Props> = ({
  variant = '64x64_1',
  ...rest
}) => {
  const image = sysedit2Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
