import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import PowerOn_32x32_4 from '../../png/PowerOn_32x32_4.png';
import PowerOn_16x16_4 from '../../png/PowerOn_16x16_4.png';

export const powerOnData = {
  '32x32_4': {
    imageSrc: PowerOn_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: PowerOn_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface PowerOnProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const PowerOn: React.FC<PowerOnProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = powerOnData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
