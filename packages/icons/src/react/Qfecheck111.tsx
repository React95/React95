import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Qfecheck111_32x32_4 from '../../png/Qfecheck111_32x32_4.png';

export const qfecheck111Data = {
  '32x32_4': {
    imageSrc: Qfecheck111_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Qfecheck111Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Qfecheck111: React.FC<Qfecheck111Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = qfecheck111Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
