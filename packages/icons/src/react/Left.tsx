import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Left_16x16_4 from '../../png/Left_16x16_4.png';

export const leftData = {
  '16x16_4': {
    imageSrc: Left_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface LeftProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Left: React.FC<LeftProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = leftData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
