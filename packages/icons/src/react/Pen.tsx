import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Pen_16x16_4 from '../../png/Pen_16x16_4.png';

export const penData = {
  '16x16_4': {
    imageSrc: Pen_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface PenProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Pen: React.FC<PenProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = penData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
