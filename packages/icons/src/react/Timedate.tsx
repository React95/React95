import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Timedate_32x32_4 from '../../png/Timedate_32x32_4.png';
import Timedate_16x16_4 from '../../png/Timedate_16x16_4.png';

export const timedateData = {
  '32x32_4': {
    imageSrc: Timedate_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Timedate_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface TimedateProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Timedate: React.FC<TimedateProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = timedateData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
