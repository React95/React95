import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Regedit_32x32_4 from '../../png/Regedit_32x32_4.png';
import Regedit_16x16_4 from '../../png/Regedit_16x16_4.png';

export const regeditData = {
  '32x32_4': {
    imageSrc: Regedit_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Regedit_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface RegeditProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Regedit: React.FC<RegeditProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = regeditData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
