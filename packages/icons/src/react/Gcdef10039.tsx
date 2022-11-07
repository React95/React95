import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Gcdef10039_32x32_4 from '../../png/Gcdef10039_32x32_4.png';

export const gcdef10039Data = {
  '32x32_4': {
    imageSrc: Gcdef10039_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Gcdef10039Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Gcdef10039: React.FC<Gcdef10039Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = gcdef10039Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
