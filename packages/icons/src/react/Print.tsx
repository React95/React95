import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Print_16x16_4 from '../../png/Print_16x16_4.png';

export const printData = {
  '16x16_4': {
    imageSrc: Print_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface PrintProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Print: React.FC<PrintProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = printData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
