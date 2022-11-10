import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Mdisp321_32x32_4 from '../../png/Mdisp321_32x32_4.png';

export const mdisp321Data = {
  '32x32_4': {
    imageSrc: Mdisp321_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Mdisp321Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Mdisp321: React.FC<Mdisp321Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = mdisp321Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
