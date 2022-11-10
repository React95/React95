import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import WindowGraph_32x32_4 from '../../png/WindowGraph_32x32_4.png';
import WindowGraph_16x16_4 from '../../png/WindowGraph_16x16_4.png';

export const windowGraphData = {
  '32x32_4': {
    imageSrc: WindowGraph_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: WindowGraph_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface WindowGraphProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const WindowGraph: React.FC<WindowGraphProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = windowGraphData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
