import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Oislb400DcScanIco_32x32_4 from '../../png/Oislb400DcScanIco_32x32_4.png';

export const oislb400DcScanIcoData = {
  '32x32_4': {
    imageSrc: Oislb400DcScanIco_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Oislb400DcScanIcoProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Oislb400DcScanIco: React.FC<Oislb400DcScanIcoProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = oislb400DcScanIcoData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
