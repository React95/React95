import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Brush_32x32_4 from '../../png/Brush_32x32_4.png';

export const brushData = {
  '32x32_4': {
    imageSrc: Brush_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface BrushProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Brush: React.FC<BrushProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = brushData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
