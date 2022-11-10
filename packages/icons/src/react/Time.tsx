import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Time_16x16_4 from '../../png/Time_16x16_4.png';

export const timeData = {
  '16x16_4': {
    imageSrc: Time_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface TimeProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Time: React.FC<TimeProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = timeData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
