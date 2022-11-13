import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Nwnp32PrinterIcon_32x32_4 from '../../png/Nwnp32PrinterIcon_32x32_4.png';
import Nwnp32PrinterIcon_16x16_4 from '../../png/Nwnp32PrinterIcon_16x16_4.png';

export const nwnp32PrinterIconData = {
  '32x32_4': {
    imageSrc: Nwnp32PrinterIcon_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Nwnp32PrinterIcon_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Nwnp32PrinterIconProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Nwnp32PrinterIcon: React.FC<Nwnp32PrinterIconProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = nwnp32PrinterIconData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
