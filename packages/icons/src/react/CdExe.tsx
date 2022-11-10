import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import CdExe_32x32_4 from '../../png/CdExe_32x32_4.png';

export const cdExeData = {
  '32x32_4': {
    imageSrc: CdExe_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface CdExeProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const CdExe: React.FC<CdExeProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = cdExeData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
