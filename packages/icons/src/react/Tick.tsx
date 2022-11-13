import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Tick_16x16_4 from '../../png/Tick_16x16_4.png';

export const tickData = {
  '16x16_4': {
    imageSrc: Tick_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface TickProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Tick: React.FC<TickProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = tickData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
