import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import MsawtAwtIcon_32x32_4 from '../../png/MsawtAwtIcon_32x32_4.png';
import MsawtAwtIcon_16x16_4 from '../../png/MsawtAwtIcon_16x16_4.png';

export const msawtAwtIconData = {
  '32x32_4': {
    imageSrc: MsawtAwtIcon_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: MsawtAwtIcon_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface MsawtAwtIconProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const MsawtAwtIcon: React.FC<MsawtAwtIconProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = msawtAwtIconData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
