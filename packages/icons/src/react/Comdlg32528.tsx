import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Comdlg32528_32x32_4 from '../../png/Comdlg32528_32x32_4.png';

export const comdlg32528Data = {
  '32x32_4': {
    imageSrc: Comdlg32528_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Comdlg32528Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Comdlg32528: React.FC<Comdlg32528Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = comdlg32528Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
