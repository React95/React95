import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Printer_32x32_4 from '../../png/Printer_32x32_4.png';
import Printer_16x16_4 from '../../png/Printer_16x16_4.png';

export const printerData = {
  '32x32_4': {
    imageSrc: Printer_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Printer_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface PrinterProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Printer: React.FC<PrinterProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = printerData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
