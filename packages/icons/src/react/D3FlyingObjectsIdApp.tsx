import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import D3FlyingObjectsIdApp_32x32_1 from '../../png/D3FlyingObjectsIdApp_32x32_1.png';
import D3FlyingObjectsIdApp_32x32_4 from '../../png/D3FlyingObjectsIdApp_32x32_4.png';

export const d3FlyingObjectsIdAppData = {
  '32x32_1': {
    imageSrc: D3FlyingObjectsIdApp_32x32_1 as string,
    width: 32,
    height: 32,
  },

  '32x32_4': {
    imageSrc: D3FlyingObjectsIdApp_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface D3FlyingObjectsIdAppProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_1' | '32x32_4';
}

export const D3FlyingObjectsIdApp: React.FC<D3FlyingObjectsIdAppProps> = ({
  variant = '32x32_1',
  ...rest
}) => {
  const image = d3FlyingObjectsIdAppData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
