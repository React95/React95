import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Lst2icon_16x16_4 from '../../png/Lst2icon_16x16_4.png';

export const lst2iconData = {
  '16x16_4': {
    imageSrc: Lst2icon_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Lst2iconProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Lst2icon: React.FC<Lst2iconProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = lst2iconData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
