import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Circle_16x16_4 from '../../png/Circle_16x16_4.png';

export const circleData = {
  '16x16_4': {
    imageSrc: Circle_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface CircleProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Circle: React.FC<CircleProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = circleData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
