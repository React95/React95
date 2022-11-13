import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import BatExec_32x32_4 from '../../png/BatExec_32x32_4.png';
import BatExec_16x16_4 from '../../png/BatExec_16x16_4.png';

export const batExecData = {
  '32x32_4': {
    imageSrc: BatExec_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: BatExec_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface BatExecProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const BatExec: React.FC<BatExecProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = batExecData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
