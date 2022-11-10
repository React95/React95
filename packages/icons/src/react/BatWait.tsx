import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import BatWait_32x32_4 from '../../png/BatWait_32x32_4.png';
import BatWait_16x16_4 from '../../png/BatWait_16x16_4.png';

export const batWaitData = {
  '32x32_4': {
    imageSrc: BatWait_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: BatWait_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface BatWaitProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const BatWait: React.FC<BatWaitProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = batWaitData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
