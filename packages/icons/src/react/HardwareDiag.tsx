import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import HardwareDiag_32x32_4 from '../../png/HardwareDiag_32x32_4.png';

export const hardwareDiagData = {
  '32x32_4': {
    imageSrc: HardwareDiag_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface HardwareDiagProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const HardwareDiag: React.FC<HardwareDiagProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = hardwareDiagData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
