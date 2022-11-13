import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Shortcut2_32x32_4 from '../../png/Shortcut2_32x32_4.png';

export const shortcut2Data = {
  '32x32_4': {
    imageSrc: Shortcut2_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Shortcut2Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Shortcut2: React.FC<Shortcut2Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = shortcut2Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
