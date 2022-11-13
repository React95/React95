import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Vvexe321_32x32_4 from '../../png/Vvexe321_32x32_4.png';

export const vvexe321Data = {
  '32x32_4': {
    imageSrc: Vvexe321_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Vvexe321Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Vvexe321: React.FC<Vvexe321Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = vvexe321Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
