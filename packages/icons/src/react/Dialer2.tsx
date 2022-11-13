import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Dialer2_32x32_4 from '../../png/Dialer2_32x32_4.png';

export const dialer2Data = {
  '32x32_4': {
    imageSrc: Dialer2_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Dialer2Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Dialer2: React.FC<Dialer2Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = dialer2Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
