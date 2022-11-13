import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import ArrowRight_32x32_4 from '../../png/ArrowRight_32x32_4.png';

export const arrowRightData = {
  '32x32_4': {
    imageSrc: ArrowRight_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface ArrowRightProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const ArrowRight: React.FC<ArrowRightProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = arrowRightData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
