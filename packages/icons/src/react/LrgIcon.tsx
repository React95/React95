import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import LrgIcon_16x16_4 from '../../png/LrgIcon_16x16_4.png';

export const lrgIconData = {
  '16x16_4': {
    imageSrc: LrgIcon_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface LrgIconProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const LrgIcon: React.FC<LrgIconProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = lrgIconData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
