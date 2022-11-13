import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Date_16x16_4 from '../../png/Date_16x16_4.png';

export const dateData = {
  '16x16_4': {
    imageSrc: Date_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface DateProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Date: React.FC<DateProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = dateData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
