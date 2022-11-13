import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Syncui131_32x32_4 from '../../png/Syncui131_32x32_4.png';

export const syncui131Data = {
  '32x32_4': {
    imageSrc: Syncui131_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Syncui131Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Syncui131: React.FC<Syncui131Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = syncui131Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
