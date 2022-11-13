import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import SccviewIcon_32x32_4 from '../../png/SccviewIcon_32x32_4.png';
import SccviewIcon_16x16_4 from '../../png/SccviewIcon_16x16_4.png';

export const sccviewIconData = {
  '32x32_4': {
    imageSrc: SccviewIcon_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: SccviewIcon_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface SccviewIconProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const SccviewIcon: React.FC<SccviewIconProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = sccviewIconData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
