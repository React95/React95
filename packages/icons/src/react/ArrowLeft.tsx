import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import ArrowLeft_32x32_4 from '../../png/ArrowLeft_32x32_4.png';

export const arrowLeftData = {
  '32x32_4': {
    imageSrc: ArrowLeft_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface ArrowLeftProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const ArrowLeft: React.FC<ArrowLeftProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = arrowLeftData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
