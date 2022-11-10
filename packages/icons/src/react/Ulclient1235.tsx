import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Ulclient1235_32x32_4 from '../../png/Ulclient1235_32x32_4.png';

export const ulclient1235Data = {
  '32x32_4': {
    imageSrc: Ulclient1235_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Ulclient1235Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Ulclient1235: React.FC<Ulclient1235Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = ulclient1235Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
