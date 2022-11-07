import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Comdlg32532_32x32_4 from '../../png/Comdlg32532_32x32_4.png';

export const comdlg32532Data = {
  '32x32_4': {
    imageSrc: Comdlg32532_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Comdlg32532Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Comdlg32532: React.FC<Comdlg32532Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = comdlg32532Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
