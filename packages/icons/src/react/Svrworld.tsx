import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Svrworld_16x16_4 from '../../png/Svrworld_16x16_4.png';

export const svrworldData = {
  '16x16_4': {
    imageSrc: Svrworld_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface SvrworldProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Svrworld: React.FC<SvrworldProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = svrworldData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
